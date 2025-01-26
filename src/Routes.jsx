import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PrivateRoute from "./auth/PrivateRoute";
import AdminHome from "./pages/admin/home/AdminHome";
import HomePage from "./pages/HomePage";
import AddClient from "./pages/admin/clients/AddClient";
import CollectionPage from "./pages/CollectionPage";
import AdminLogin from "./pages/AdminLogin";
import ChooseEvent from "./pages/admin/clients/ChooseEvent";
import PackagePage from "./pages/packages/pack/PackageType";
import StoryPage from "./pages/stories/StoryPage";

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
        path: "/packages/:storyId",
        element: <PackagePage />,
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
                <ChooseEvent />
              </PrivateRoute>
            ),
          },
        ]
      },
      
    ],
  },
]);

export default router;