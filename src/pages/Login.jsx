 import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
 const [pass,setPass]=useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleLogin = () => {
    if (email) {
      setUser({ email });
      navigate("/dashboard");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Login</h2>
      <input className="border p-2 w-full mb-2" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="border p-2 w-full mb-2" type="password" placeholder="password" onChange={(e) => setPass(e.target.value)} />
 <button className="bg-green-500 text-white px-4 py-2" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
