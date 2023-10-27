import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });

      const token = response.data.token;
      const user = response.data.username;

      localStorage.setItem("Authtoken", token);
      localStorage.setItem("user", user);

      navigate("/dashboard");
    } catch (error) {
      console.error("API Request Error:", error);
      setError("An error occurred while logging in");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      {" "}
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <label
                className="leading-7 text-sm text-gray-600"
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                autoComplete="username"
                disabled={isLoading}
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError("");
                }}
              />
            </div>
            <div className="grid gap-1">
              <label
                className="leading-7 text-sm text-gray-600"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                autoComplete="current-password"
                disabled={isLoading}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
              />
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <button
              className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-white py-2 px-4 rounded"
              type="submit"
              disabled={isLoading}
            >
              {isLoading && <div className="mr-2 h-4 w-4 animate-spin" />}
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
