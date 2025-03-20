import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Error from "./Pages/Error";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/signin",
    element: <Signin />,
    errorElement: <Error />,
  },
]);
