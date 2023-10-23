import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";
import "./css/preview.css";
let Publicpreview=()=>{
    let {rid}=useParams();
    let [previewData,setPreviewData] = useState(null)
    useEffect(()=>{
     firestore.collection("resume").doc(rid).get().then((doc)=>{
           let data = doc.data();
           setPreviewData(data);
     })
    },[])
    return(
        <>
         {previewData ?(
            <> 
            <div className="row m-4">
            <div className="preview-container  offset-3 col-6">
     
                <div className={`top-box ${previewData.code}`}></div>
                <div className="name-bar mt-4" >
                <p className={`template-${previewData.code} col-2 offset-4`}>{previewData.details.fname}</p>
                <p className={`template-${previewData.code} col-2 offset-1`}>{previewData.details.lname}</p>
                </div>
                <div className="info">
                <p className={`template-${previewData.code}col-2 offset-2`}><span className="bold">{previewData.details.email==""?"":"Email : "} </span> {previewData.details.email}</p>
                <p className=" offset-1">{previewData.details.phone==""?"":" | "}</p>
                <p className={`template-${previewData.code}col-2 offset-1`}><span className="bold">{previewData.details.phone==""?"":"City : "} </span> {previewData.details.phone}</p>
                </div>
                
                
                <p className={`template-${previewData.code}`}><span className="bold shift">{previewData.details.city==""?"":"City : "}</span> {previewData.details.city}</p>
                <p className={`template-${previewData.code}`}><span className="bold shift">{previewData.details.state==""?"":"State : "} </span> {previewData.details.state}</p>
                <p className={`template-${previewData.code}`}><span className="bold shift">{previewData.details.degree==""?"":"Degree : "} </span> {previewData.details.degree}</p>
                <p className={`template-${previewData.code}`}><span className="bold shift">{previewData.details.college==""?"":"College : "} </span> {previewData.details.college}</p>
                <p className={`template-${previewData.code}`}><span className="bold shift">{previewData.details.cgpa==""?"":"CGPA: "}</span>{previewData.details.cgpa}</p>
                <p className={`template-${previewData.code}`}><span className="bold shift">{previewData.details.year==""?"":"Year : "}</span>{previewData.details.year}</p>
            </div>
            </div>
                </>
        ):("")}
        </>
       
    )
}
export default Publicpreview;