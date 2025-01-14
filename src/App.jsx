import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import AddClient from "./pages/clients/AddClient";
import AdminHome from "./pages/AdminHome";
import router from "./Routes";
// import { RouterProvider } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import AuthProvider from "./auth/AuthProvider";
import AdminLogin from "./pages/AdminLogin";
import PackagePage from "./pages/packages/Index";
import StoryPage from "./pages/stories/StoryPage";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#B82B3C",
      500: "rgba(184, 43, 60, .1)",
    },

    secondary: {
      main: "#723A7A",
    },
  },
});
const App = () => {
  return (
    // <React.StrictMode>
    // <RouterProvider router={router}/>
    <ThemeProvider theme={theme}>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:storyId" element={<StoryPage />} />
          <Route path="/gallery/:storyId" element={<CollectionPage />} />
          <Route path="/packages/:storyId" element={<PackagePage />} />
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
    </ThemeProvider>
    // </React.StrictMode>
  );
};

export default App;
