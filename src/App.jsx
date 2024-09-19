import Header from "./components/Header";
import { Route, Routes, useNavigate } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";

function App() {
  const navigate = useNavigate();

  const { isRegistered, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isRegistered) {
      navigate("/register");
    } else if (isRegistered && !isAuthenticated) {
      navigate("/login");
    }
  }, [isRegistered, isAuthenticated]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-2xl mx-auto p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
