import { useDispatch, useSelector } from "react-redux";
import "./css/form.css";
import Preview from "./preview";
import { detailCreator } from "../Redux/Actions/detailsActions";
import { useNavigate } from "react-router-dom";

let PersonalData = ()=>{
    let details=useSelector(state=>state.details);
    let {fname,lname,email,phone,city,state}=details; //destructuring
    let dispatch=useDispatch()
    let navigate = useNavigate();
return <>
  <div className="personal-container">
  
    <div className="personal-form">
        <h2 className="m-4">Personal Details</h2>
        <div class="row m-3">
            <div class="col-5">
                <input type="text" value ={fname} class="form-control" placeholder="First name" onChange={(e)=>{
                   dispatch(detailCreator({fname:e.currentTarget.value}))
                }} />
            </div>
            <div class="col-5">
                <input type="text" value ={lname} class="form-control" placeholder="Last name" onChange={(e)=>{
                   dispatch(detailCreator({lname:e.currentTarget.value}))
                }}/>
            </div>
            <div class="col-5">
                <input type="email" value ={email} class="form-control" placeholder="Email" 
                onChange={(e)=>{
                    dispatch(detailCreator({email:e.currentTarget.value}))
                 }}/>
            </div>
            <div class="col-5">
                <input type="number" value ={phone} class="form-control" placeholder="Phone Number" 
                onChange={(e)=>{
                    dispatch(detailCreator({phone:e.currentTarget.value}))
                 }}/>
            </div>
            <div class="col-5">
                <input type="text" value ={city} class="form-control" placeholder="City" onChange={(e)=>{
                   dispatch(detailCreator({city:e.currentTarget.value}))
                }}/>
            </div>
            <div class="col-5">
                <input type="text" value ={state} class="form-control" placeholder="State" onChange={(e)=>{
                   dispatch(detailCreator({state:e.currentTarget.value}))
                }}
                />
            </div>
        </div>
        <button onClick={()=>{
            navigate("/qualifications")
        }}className="btn btn-primary m-4">Next</button>
    </div> 
    <Preview/>
  </div>
</>
}
export default PersonalData;
