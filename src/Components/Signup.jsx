import { useState } from "react";
import { auth } from "../firebase";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

let Signup = () => {
  let navigate = useNavigate();
  let user = useSelector((state) => state.user);
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [email, setEmail] = useState("");

  return (
    <>
      {user ? <Navigate to="/home" /> : <Navigate to="/signup" />}
      <div className="row">
        <div className="col-4 offset-4">
          <h1 className="mt-4 mb-4">Sign Up!</h1>
          <form className="mt-4">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button
              className="btn btn-primary"
              onClick={async (e) => {
                e.preventDefault();
                if (password === confirmPassword) {
                  try {
                    await auth.createUserWithEmailAndPassword(email, password);
                    // Successfully signed up, clear fields or perform any additional actions
                    setEmail("");
                    setPassword("");
                    setConfirmPassword("");
                  } catch (error) {
                    // Handle sign-up errors (e.g., display an error message)
                    console.error("Sign-up error:", error.message);
                  }
                } else {
                  // Passwords don't match, provide user feedback or prevent sign-up
                  console.error("Passwords do not match");
                }
              }}
            >
              Sign Up
            </button>
            <br />
            <br />
            <button
              onClick={(e) => {
                
                navigate("/login");
              }}
              className="btn btn-primary"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
