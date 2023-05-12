import App from "./src/App";
import Layout from "./src/Layout/Layout";
import Login from "./src/Pages/Login";
import LoginForm from "./src/Components/LoginForm";
import NumberCounter from "./src/Components/Visitors";
import Signin from "./src/Components/LoginForm";
import Signup from "./src/Pages/Signup";
import SignupForm from "./src/Components/SignupForm";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>,
    children: [
      {
          path: '/login',
          element: <LoginForm />,
      },
      {
        path: '/login',
        element: <NumberCounter />,
      }
  ],
  },
  {
    path: "/signup",
    element: <Signup/>,
    children: [
      {
          path: '/signup',
          element: <SignupForm />,
      },
  ],
  },
])
export default router