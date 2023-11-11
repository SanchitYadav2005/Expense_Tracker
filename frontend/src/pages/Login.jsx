import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("")
    setPassword("")
  }

  return (
    <form action="" onSubmit={handleSubmit} className="login-form">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={handleEmailChange}
        value={email}
        className="email-input"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        onChange={handlePassword}
        value={password}
        className="pass-input"
      />
      <button className="login-btn">Login</button>
    </form>
  );
}

export default Login;
