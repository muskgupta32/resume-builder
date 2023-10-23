import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";//Redirect updated to Navigate
let Login=()=>{

    //used to navigate between pages/components
    let navigate = useNavigate();
    let [password,setPassword]=useState("");
    let [email,setEmail]=useState("");
    let user=useSelector((state)=>state.user);
    return <>
     {user?<Navigate to="/home"/>:""}
    <div className="row">
        <div className="col-4 offset-4">
            <h1 className="mt-4 mb-4">Login</h1>
         <form className="mt-4">
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input value={email} 
                onChange={(e)=>{
                   setEmail(e.currentTarget.value);
                }}
                
                type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input value={password} 
                onChange={(e)=>{
                   setPassword(e.currentTarget.value);
                }}
                
                type="password" className="form-control" id="exampleInputPassword1"/>
            </div>

            <button 
             onClick={(e)=>{
                e.preventDefault();
                   
                   auth.signInWithEmailAndPassword(email,password)
                    setEmail("");
                    setPassword(""); //to clear the fields after clicking on signup button
                
            }}
            className="btn btn-primary">Login</button>
            <br/>
            <br/>
            <button onClick={()=>{
                navigate("/signup")
            }}
            className="btn btn-primary">Sign Up</button>
         </form>
        </div>
    </div>

    </>
}
export default Login;