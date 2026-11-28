import { useState } from "react";
import "../styles/LoginPage.css";
import campusImg from "../../assets/campus.png"
import logo from "../../assets/behrend.png"

export function LoginPage(){
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
    <div className="login-page">
      <header className="login-navbar">
        <img src={logo} alt="Logo" className="login-logo" />
      </header>

      <main
        className="login-hero"
        style={{ backgroundImage: `url(${campusImg})` }}
      >
        <div className="login-overlay" />

        <div className="login-content">
          <h1 className="login-title">Behrend Scavenger Hunt</h1>

          <section className="login-card">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                id = "password"
                type = "password"
                className = "form-input"
                placeholder = "Password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
            />
            </div>

            <button type="button" className="btn-sign-in">
              Sign In
            </button>

            <div className="card-footer">
              <button type="button" className="link-forgot">
                Forgot password?
              </button>
              <button type="button" className="btn-guest">
                Continue as Guest
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );

}

export default LoginPage;