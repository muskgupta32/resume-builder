import { useDispatch, useSelector } from "react-redux";
import "./css/form.css";
import Preview from "./preview";
import { detailCreator } from "../Redux/Actions/detailsActions";
import { useNavigate } from "react-router-dom";
import { saveResume } from "../Redux/Actions/saveActions";
let Qualifications=()=>{
    let {degree,college,cgpa,year,isPublic}=useSelector(state=>state.details); //destructuring
    let details=useSelector(state=>state.details);
    let code=useSelector(state=>state.template);
    let {uid}=useSelector(state=>state.user)
    let saveState=useSelector(state=>state.saveState);
    let dispatch=useDispatch()
    let navigate = useNavigate();
  return <>
    <div className="qual-container">
  
  <div className="qual-form">
      <h2 className="m-4">Professional Details</h2>
      <div class="row m-3">
         
          
          <div class="col-5">
              <input type="text" value ={degree} class="form-control" placeholder="Degree" onChange={(e)=>{
                 dispatch(detailCreator({degree:e.currentTarget.value}))
              }} />
          </div>
          <div class="col-5">
              <input type="text" value ={college} class="form-control" placeholder="College" onChange={(e)=>{
                 dispatch(detailCreator({college:e.currentTarget.value}))
              }} />
          </div>
          <div class="col-5">
              <input type="text" value ={cgpa} class="form-control" placeholder="CGPA" onChange={(e)=>{
                 dispatch(detailCreator({cgpa:e.currentTarget.value}))
              }} />
          </div>
          <div class="col-5">
              <input type="text" value ={year} class="form-control" placeholder="Year" onChange={(e)=>{
                 dispatch(detailCreator({year:e.currentTarget.value}))
              }} />
          </div>
          <div class="form-check m-3c">
            <input class="form-check-input" type="checkbox" checked={isPublic}
            onClick={(e)=>{
                dispatch(detailCreator({isPublic : e.currentTarget.checked}));
            }}
            id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                Make public
            </label>
          </div>
      </div>
      <button onClick={()=>{
          navigate("/personal")
      }}className="btn btn-primary m-4">Back</button>
  </div> 
  <Preview/>
</div>

<button className="btn btn-primary qual-save" onClick={()=>{
    dispatch(saveResume(uid,details,code))
}}
>Save to Database</button>

<button className="btn btn-primary qual-gen" onClick={()=>{
    dispatch(saveResume(uid,details,code))
    alert("localhost:3000/publicpreview/" + saveState.id)
    }}>Generate Link</button>

  </>
}
export default Qualifications;