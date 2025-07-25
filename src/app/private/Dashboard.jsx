import { useAuth } from "../../core/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const { succes, error, message } = signOutUser();
      if (!succes) {
        console.log(error?.message);
        return;
      }
      console.log(message);
      navigate("/");
    } catch (error) {
      console.log(error, "Unexpected Error Occured");
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
