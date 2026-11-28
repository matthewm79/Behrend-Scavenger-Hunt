import { useState } from 'react'
import type { FormEvent } from 'react'
import behrendLogo from './assets/behrend.png'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <main className="login-page">
      <header className="top-bar">
        <img className="brand-logo" src={behrendLogo} alt="Penn State Behrend" />
      </header>

      <section className="login-content" aria-labelledby="page-title">
        <h1 id="page-title">Behrend Scavenger Hunt</h1>

        <form className="login-card" onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button className="sign-in" type="submit">Sign In</button>

          <div className="card-footer">
            <a className="forgot-link" href="#forgot-password">Forgot password?</a>
            <button className="guest-button" type="button">Continue as Guest</button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default App
