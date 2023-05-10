import App from "./src/App";
import Layout from "./src/Layout/Layout";
import Login from "./src/Pages/Login";
import LoginForm from "./src/Components/LoginForm";
import Signin from "./src/Components/LoginForm";
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
  ],
  }
])
export default router