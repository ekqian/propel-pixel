import { useNavigate } from "react-router-dom";
import axios from "axios";
import { HomeProp } from "./types/homeProp";

function SignUp({ username, password, toggle }: HomeProp) {
  const navigate = useNavigate();
  return (
    <>
      <button
        type="submit"
        onClick={() =>
          axios
            .post(
              "http://localhost:8000/user/signup",
              {
                username: username,
                password: password,
              },
              { withCredentials: true }
            )
            .then(
              () => navigate("/home"),
              (error) => alert(error)
            )
        }
      >
        Sign Up
      </button>
      <p> Already have an account? </p>
      <b style={{ color: "purple" }} onClick={toggle}>
        Log In
      </b>
    </>
  );
}

export default SignUp;
