let initialState={
    fname:"",
    lname:"",
    email:"",
    phone:"",
    city:"",
    state:"",
    degree:"",
    college:"",
    cgpa:"",
    year:"",
    isPublic:false,
}
let detailsReducer=(state=initialState,action)=>{
  switch(action.type)
  {
    case "SET_DETAILS":
     return {...state,...action.payload}//this modifies all the keys in the state object with value of keys in details object

    default:
        return state
  }
}

export default detailsReducer;