import App from "./src/App";
import Layout from "./src/Layout/Layout";
import Login from "./src/Pages/Login";
import Cities from "./src/Pages/Cities";
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
    element: <Login/>
  },
  {
    path: "/cities",
    element: <Cities/>
  }
])
export default router