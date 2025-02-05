import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    setUser(null); // Clears user session
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">My Blog</Link>
        </h1>

        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/dashboard" className="hover:underline">Dashboard</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="hover:underline">Login</Link>
              </li>
              <li>
                <Link to="/signup" className="hover:underline">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
