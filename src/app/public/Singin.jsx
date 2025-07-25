import { useActionState, useEffect, useRef } from "react";
import { useAuth } from "../../core/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Singin = () => {
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const formRef = useRef(null);
  const formAction = async (_prevState, formState) => {
    const userData = {
      email: formState.get("email").toString().trim(),
      password: formState.get("password").toString(),
    };

    const { success, error } = await signInUser(
      userData.email,
      userData.password
    );

    if (!success) {
      return {
        success: false,
        error: error || "Signin failed try again",
      };
    }
    return {
      success: true,
      message: "Sign in successfull redirecting...",
      error: null,
    };
  };

  const [state, submitAction, isPending] = useActionState(formAction, {
    success: null,
    message: null,
    error: null,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      toSignin();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [state]);

  const toSignin = () => {
    if (state?.success) {
      navigate("/dashboard");
      formRef.current.reset();
    }
  };

  return (
    <div className="relative flex h-full w-full">
      <div className="h-screen w-1/2 bg-black">
        <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
          <div>
            <p className="text-2xl">Login</p>
            <p>please login to continue</p>
          </div>
          <div className="my-6">
            <button className="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-black hover:bg-gray-200 sm:p-2">
              <img
                src="https://freesvg.org/img/1534129544.png"
                className="mr-2 w-6 object-fill"
              />
              Sign in with Google
            </button>
          </div>
          <div>
            <fieldset className="border-t border-solid border-gray-600">
              <legend className="mx-auto px-2 text-center text-sm">
                Or login via our secure system
              </legend>
            </fieldset>
          </div>
          <div className="mt-10">
            <form
              ref={formRef}
              action={submitAction}
              aria-label="Sing in form"
              aria-describedby="form-description"
            >
              <div>
                <label className="mb-2.5 block font-extrabold" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                  placeholder="mail@user.com"
                  aria-invalid={!state?.error}
                  disabled={isPending}
                  aria-required="true"
                />
              </div>
              <div className="mt-4">
                <label className="mb-2.5 block font-extrabold" htmlFor="email">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  aria-required="true"
                  aria-invalid={!state?.error}
                  disabled={isPending}
                  className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow"
                />
              </div>
              <div className="mt-4 flex w-full flex-col justify-between sm:flex-row">
                <div>
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember" className="mx-2 text-sm">
                    Remember me
                  </label>
                </div>
                <div>
                  <a href="#" className="text-sm hover:text-gray-200">
                    Forgot password
                  </a>
                </div>
              </div>
              <div className="my-10">
                <button
                  className="w-full rounded-full bg-orange-600 p-5 hover:bg-orange-800"
                  type="submit"
                  aria-busy={!state?.error}
                >
                  {isPending ? "Singing in..." : "Sing in"}
                </button>
              </div>
              {state?.error?.message}
            </form>
          </div>
        </div>
      </div>
      <div className="h-screen w-1/2 bg-blue-600">
        <img
          src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg"
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default Singin;
