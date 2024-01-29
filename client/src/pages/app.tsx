import { useState } from "react";
import logo from "../assets/logo.png";
import "./app.css";
import "../index.css";
import LogIn from "../components/loginButton";
import SignUp from "../components/signupButton";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logIn, setLogIn] = useState(true);

  return (
    <div>
      <div>
        <a>
          <img src={logo} className="logo" alt="Logo" />
        </a>
      </div>

      <div className="card">
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </div>

        {logIn && (
          <LogIn
            username={username}
            password={password}
            toggle={() => {
              setLogIn(false);
              setUsername("");
              setPassword("");
            }}
          />
        )}
        {!logIn && (
          <SignUp
            username={username}
            password={password}
            toggle={() => {
              setLogIn(true);
              setUsername("");
              setPassword("");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
