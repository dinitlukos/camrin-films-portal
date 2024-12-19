import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";
import CollectionPage from "./pages/CollectionPage";
import AddClient from "./pages/AddClient";
import AdminHome from "./pages/AdminHome";
import router from "./Routes";
// import { RouterProvider } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import AuthProvider from "./auth/AuthProvider";
import AdminLogin from "./pages/AdminLogin";

const App = () => {
  return (
    // <React.StrictMode>
    // <RouterProvider router={router}/>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:storyId" element={<StoryPage />} />
          <Route path="/gallery/:storyId" element={<CollectionPage />} />
          <Route path="/admin/client" element={<AddClient />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminHome />
              </PrivateRoute>
            }
          />
          <Route path="/:param(cp-[0-9]+)" element={<AddClient />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </AuthProvider>
    // </React.StrictMode>
  );
};

export default App;
