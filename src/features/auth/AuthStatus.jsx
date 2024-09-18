import { useSelector, useDispatch } from "react-redux";
import { logout } from "./authSlice";
import { useEffect } from "react";

const AuthStatus = () => {
  const dispatch = useDispatch();
  const { username, isRegistered, isAuthenticated } = useSelector(state => state.auth);

  if (!isRegistered) {
    return <p className="text-center text-white">Please Register yourself! </p>;
  }
  
  if (!isAuthenticated) {
    return <p className="text-center text-white">You are not logged in.</p>;

  }

  return (
    <div className="flex justify-between items-center">
      <p className="text-lg text-white font-semibold">Welcome, {username}!</p>
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
