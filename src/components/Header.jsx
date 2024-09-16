import AuthStatus from "../features/auth/AuthStatus";

const Header = () => {
  return (
    <header>
      <div className="bg-blue-600 p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Fitness Tracker</h1>
      </div>
      <div className="bg-gray-300 px-4 py-2">

      <AuthStatus />
      </div>
    </header>
  );
};

export default Header;
