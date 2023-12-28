import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; //update useHistory to useNavigate
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { templateCreator } from "../Redux/Actions/templateActions";
import "./css/home.css";

let Home=()=>{
    let user=useSelector((state)=>state.user);
    let navigate = useNavigate();
    let code=useSelector((state)=>state.template);
    console.log(code);
    let dispatch=useDispatch();
    return <>
    {user?<Navigate to="/home"/>:<Navigate to="/login"/>}
    <br/>
   <div className="template-container">
    <div className="row">
    <div className="template template-A col-2 offset-2" 
    onClick={()=>{dispatch(templateCreator("A"));
    navigate("/personal") 
    }}><img src="http://localhost:3000/skin1.svg" alt="Template A" /></div>
    <div className="template template-B col-2 offset-1"
    onClick={()=>{dispatch(templateCreator("B"));
    navigate("/personal") 
    }}> <img src="http://localhost:3000/skin2.svg" alt="Template B" /></div>
    <div className="template template-C col-2 offset-1"
    onClick={()=>{dispatch(templateCreator("C"));
    navigate("/personal") 
    }}> <img src="http://localhost:3000/skin3.svg" alt="Template C" /></div></div>
    <br/>
    <div className="row">
    <div className="template template-D col-2 offset-3"
    onClick={()=>{dispatch(templateCreator("D"));
    navigate("/personal") 
    }}> <img src="http://localhost:3000/skin4.svg" alt="Template D" /></div>
    <div className="template template-E col-2 offset-2"
    onClick={()=>{dispatch(templateCreator("E"));
    navigate("/personal") 
    }}> <img src="http://localhost:3000/skin5.svg" alt="Template E" /></div>
    </div>
   </div>
    <button className="home-logout-btn" onClick={()=>{
     auth.signOut();//logged in user will get signed out and onAuthStateChanged function in App.js will get null value in the state and home page will redirect to login page
    }}>LOGOUT</button>
    </>
}
export default Home;