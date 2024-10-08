import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPassShow, setIsPassShow] = useState(false);
  const [error, setError] = useState(null);

  const registeredUsername = useSelector((state) => state.auth.username);
  const registeredPassword = useSelector((state) => state.auth.password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === registeredUsername && password == registeredPassword) {
      dispatch(login());
      setError(null);
      navigate("/");
    } else {
      setError("Invalid Username or Password!");
    }
  };

  return (
    <div className="mt-5">
      <h2 className="text-2xl font-bold">Login</h2>
      <form onSubmit={handleSubmit} className="mt-3 space-y-3">
        <div>
          <label className="block text-sm">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Username"
            required
          />
        </div>
        <div>
          <label className="block text-sm">Password</label>
          <div className="relative">
            <input
              type={isPassShow ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Password"
              required
            />
            <span
              onClick={() => setIsPassShow(!isPassShow)}
              className="absolute right-2 top-2 cursor-pointer"
            >
              {isPassShow ? (
                <FontAwesomeIcon icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon icon={faEye} />
              )}
            </span>
          </div>
        </div>
        {error && <p className="text-red-600">{error}</p>}
        <button
          type="submit"
          className="w-full px-3 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
