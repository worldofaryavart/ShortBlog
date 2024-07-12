import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShortBlogDesktop from "./pages/ShortBlogDesktop";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<ShortBlogDesktop />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Protected routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element = {<ProfilePage />} />
            <Route path="/edit-profile" element = {<EditProfilePage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
