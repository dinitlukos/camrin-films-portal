import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminHome from './pages/admin/home/AdminHome';
import AddClient from './pages/admin/clients/AddClient';
import CollectionPage from './pages/CollectionPage';
import HomePage from './pages/HomePage';
import { createTheme, ThemeProvider } from '@mui/material';
import AuthProvider from './auth/AuthProvider';
import PrivateRoute from './auth/PrivateRoute';
import AdminLogin from './pages/admin/login/AdminLogin';
import PackagePage from './pages/packages/Index';
import StoryPage from './pages/stories/StoryPage';
import AdminClientNotes from './pages/admin/notes/AdminClientNotes';
import OpenWhatsApp from './pages/OpenWhatsApp';
import favIcon from "assets/logo.jpg"
import Chat from './pages/admin/chat/Chat';
import EnquiryPage from './pages/Enquiry/EnquiryPage';


const theme = createTheme({
  palette: {
    primary: {
      main: '#B82B3C',
      500: 'rgba(184, 43, 60, .1)',
    },
    secondary: {
      main: '#723A7A',
    },
    info: {
      main: '#3A627A',
    },
    warning: {
      main: '#7A523A',
    },
  },
});
const App = () => {

  useEffect(()=>{
    const favicon = document.getElementById("favicon");
    favicon.href = favIcon
  },[])
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
            <Route path="/chatus" element={<OpenWhatsApp />} />
            <Route path="/enquiry" element={<EnquiryPage />} />
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <AdminHome />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/client/notes"
              element={
                <PrivateRoute>
                  <AdminClientNotes />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/chat"
              element={
                <PrivateRoute>
                  <Chat />
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
