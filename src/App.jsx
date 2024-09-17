import Header from "./components/Header";
import { Route, Routes } from "react-router";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./pages/Home";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-2xl mx-auto p-5">
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
