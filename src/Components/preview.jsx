import { useSelector } from "react-redux";
import "./css/preview.css";

let Preview=()=>{
    let {fname,lname,email,phone,city,state,degree,college,cgpa,year}=useSelector((state)=>state.details);
    let templateCode = useSelector((state)=>state.template);
   return <>
   <div className="preview-container">
     
    <div className={`top-box ${templateCode}`}></div>
    <div className="name-bar mt-4" >
    <p className={`template-${templateCode} col-2 offset-4`}>{fname}</p>
    <p className={`template-${templateCode} col-2 offset-1`}>{lname}</p>
    </div>
    <div className="info">
    <p className={`template-${templateCode}col-2 offset-2`}><span className="bold">{email==""?"":"Email : "} </span> {email}</p>
    <p className=" offset-1">{phone==""?"":" | "}</p>
    <p className={`template-${templateCode}col-2 offset-1`}><span className="bold">{phone==""?"":"City : "} </span> {phone}</p>
    </div>
    
    
    <p className={`template-${templateCode}`}><span className="bold shift">{city==""?"":"City : "}</span> {city}</p>
    <p className={`template-${templateCode}`}><span className="bold shift">{state==""?"":"State : "} </span> {state}</p>
    <p className={`template-${templateCode}`}><span className="bold shift">{degree==""?"":"Degree : "} </span> {degree}</p>
    <p className={`template-${templateCode}`}><span className="bold shift">{college==""?"":"College : "} </span> {college}</p>
    <p className={`template-${templateCode}`}><span className="bold shift">{cgpa==""?"":"CGPA: "}</span>{cgpa}</p>
    <p className={`template-${templateCode}`}><span className="bold shift">{year==""?"":"Year : "}</span>{year}</p>
   </div>
   </> 
}
export default Preview;