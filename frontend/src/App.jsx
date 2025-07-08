import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NotesDetail from "./pages/NotesDetail.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ProtectRoute from "./components/ProtectedRoute.jsx";
// import toast from "react-hot-toast"

function App() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
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
