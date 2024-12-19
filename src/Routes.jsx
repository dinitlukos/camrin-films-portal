import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PrivateRoute from "./auth/PrivateRoute";
import AdminHome from "./pages/AdminHome";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";
import AddClient from "./pages/AddClient";
import CollectionPage from "./pages/CollectionPage";
import AdminLogin from "./pages/AdminLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/:storyId",
        element: <StoryPage />,
      },
      {
        path: "/gallery/:storyId",
        element: <CollectionPage />,
      },
      {
        path: "/login",
        element: (
          <PrivateRoute>
            <AdminLogin />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin",
        element: (
          <PrivateRoute>
            <AdminHome />
          </PrivateRoute>
        ),
        children: [
          
          {
            path: "/admin/client",
            element: (
              <PrivateRoute>
                <AddClient />
              </PrivateRoute>
            ),
          },
        ]
      },
      
    ],
  },
]);

export default router;