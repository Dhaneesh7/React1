 import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ setUser }) => {
const [name,setName]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (email && password) {
      setUser({ email });
      navigate("/");
    } else {
      alert("Please enter valid details!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="p-6 border rounded" onSubmit={handleSignup}>
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <input
          className="border p-2 w-full mb-2"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 w-full">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
