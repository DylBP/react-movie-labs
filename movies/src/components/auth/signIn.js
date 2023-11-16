import React, { useState } from "react";
import { signIn } from "./auth";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
        event.preventDefault();
        const user = await signIn(email, password);
        console.log("User signed in: ", user);
        navigate('/');
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignInForm;