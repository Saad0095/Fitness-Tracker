import { useSelector, useDispatch } from "react-redux";
import { logout } from "./authSlice";
import { useEffect } from "react";

const AuthStatus = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [user, isAuthenticated]);

  if (!isAuthenticated) {
    return <p className="text-gray-500">You are not logged in.</p>;
  }

  return (
    <div className="flex justify-between items-center">
      <p className="text-lg">Welcome, {user}!</p>
      <button
        onClick={() => dispatch(logout())}
        className="px-3 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default AuthStatus;
