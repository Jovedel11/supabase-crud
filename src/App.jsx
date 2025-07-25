import { RouterProvider } from "react-router-dom";
import AuthContext from "./core/context/AuthContext";

import { router } from "./router";
function App() {
  return (
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  );
}

export default App;
