import { Link } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
("firebase/auth");
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpGoogle = async (e) => {
    e.preventDefault();
    console.log(auth?.currentUser?.email);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="card">
        <h3>Welcome!! please login to continue</h3>
        <form className="form-handler">
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button>Sign in</button>
          <button onClick={signUpGoogle}>Login with google</button>
          <div>
            <p>Dont have an Account?</p>
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
