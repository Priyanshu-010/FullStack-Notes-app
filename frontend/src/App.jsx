import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NotesDetail from "./pages/NotesDetail.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ProtectRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-gray-900 to-gray-800 px-4 sm:px-6 lg:px-8" />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/"
          element={
            <ProtectRoute>
              <HomePage />
            </ProtectRoute>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectRoute>
              <CreatePage />
            </ProtectRoute>
          }
        />
        <Route
          path="/notes/:id"
          element={
            <ProtectRoute>
              <NotesDetail />
            </ProtectRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;