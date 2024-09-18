import { useState } from "react";
import { useDispatch } from "react-redux";
import { json, useNavigate } from "react-router-dom";
import { register } from "./authSlice";
import { useEffect } from "react";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registeration, setRegisteration] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegisteration({ ...registeration, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      register({
        username: registeration.username,
        email: registeration.email,
        password: registeration.password,
      })
    );
    navigate("/login");
  };

  return (
    <div className="mt-5">
      <h2 className="text-2xl font-bold">Register</h2>
      <form onSubmit={handleSubmit} className="mt-3 space-y-3">
        <div>
          <label className="block text-sm">Username</label>
          <input
            type="text"
            name="username"
            value={registeration.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Username"
            required
          />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={registeration.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label className="block text-sm">Password</label>
          <input
            type="password"
            name="password"
            value={registeration.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-3 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
