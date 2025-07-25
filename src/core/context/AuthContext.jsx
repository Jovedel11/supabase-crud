import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../../../supabaseClient";

const AuthProvider = createContext();

const AuthContext = ({ children }) => {
  const [session, setSession] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // get inital session
    const getInitialSession = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          throw new Error(error.message);
        }
        console.log(data.session);
        console.log(data.session.user);
        setSession(data.session);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getInitialSession();

    // for session change (null, undefined, session)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth change", event);
      setSession(session);
    });

    // unsubscribe session
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  //singin
  const signInUser = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        return {
          success: false,
          error: {
            message: error.message,
            code: error.code,
          },
        };
      }

      if (!data.session) {
        return {
          success: false,
          error: {
            message: "Login Failed: No session retured",
            code: "No session",
          },
        };
      }

      return { success: true, data };
    } catch (error) {
      return {
        success: false,
        error: {
          message: "Unexpected Error Occured",
          code: "Unexpected Error",
        },
      };
    }
  };

  //singout
  const signOutUser = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        return {
          success: false,
          eroor: {
            message: error.message,
            code: error.code,
          },
        };
      }
      setSession(null);
      return { success: true, message: "Signout Successfuly" };
    } catch (error) {
      return {
        success: false,
        error: {
          message: error.message || "Error Sign out",
          code: "Unexpected Error",
        },
      };
    }
  };

  return (
    <AuthProvider.Provider
      value={{ session, loading, signInUser, signOutUser }}
    >
      {children}
    </AuthProvider.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthProvider);
};

export default AuthContext;
