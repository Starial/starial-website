import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import baseUrl from "../config";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${baseUrl}admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await res.json();
      // console.log("Response from backend: ", res_data);
      if (res.ok) {
        storeTokenInLS(res_data.token);
        toast.success("Logged in successfully!", {
          onClose: navigate("/careers"),
        });
        setUser({ email: "", password: "" });
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (e) {
      console.error("Unable to login in.", e);
      toast.error("Unable to login!");
    }
  };
  return (
    <section className="login-section">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>
        <button type="submit">LOGIN</button>
      </form>
    </section>
  );
}
