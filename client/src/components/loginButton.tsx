import { useNavigate } from "react-router-dom";
import axios from "axios";
import { HomeProp } from "./types/homeProp";

function LogIn({ username, password, toggle }: HomeProp) {
  const navigate = useNavigate();
  return (
    <>
      <button
        type="submit"
        onClick={() =>
          axios
            .post(
              "http://localhost:8000/user/login",
              {
                username: username,
                password: password,
              },
              { withCredentials: true }
            )
            .then(
              () => navigate("/home"),
              () => alert("Invalid Log In")
            )
        }
      >
        Log In
      </button>
      <p> Don&apos;t have an account? </p>
      <b style={{ color: "purple" }} onClick={toggle}>
        Sign Up
      </b>
    </>
  );
}

export default LogIn;
