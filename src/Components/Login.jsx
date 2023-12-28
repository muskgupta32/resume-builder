import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

let Login = () => {
  //used to navigate between pages/components
  let navigate = useNavigate();
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let user = useSelector((state) => state.user);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Successfully logged in, clear fields
      setEmail("");
      setPassword("");
    } catch (error) {
      // Handle authentication errors (e.g., display an error message)
      console.error('Authentication error:', error.message);
    }
  };

  return (
    <>
      {user ? <Navigate to="/home" /> : <Navigate to="/login" />}
      <div className="row">
        <div className="col-4 offset-4">
          <h1 className="mt-4 mb-4">Login</h1>
          <form className="mt-4">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
                type="email"
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
                value={password}
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button
              onClick={handleLogin}
              className="btn btn-primary"
            >
              Login
            </button>
            <br />
            <br />
            <button
              onClick={() => {
                navigate("/signup");
              }}
              className="btn btn-primary"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
