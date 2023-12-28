import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { auth, firestore } from "./firebase";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userCreator } from "./Redux/Actions/userActions";
import PersonalData from "./Components/personalData";
import Qualifications from "./Components/Qualifications";
import Publicpreview from "./Components/Publicpreview"

let App=()=> {
  let dispatch = useDispatch();
  
  useEffect(()=>{       //ComponentDidMount
   let unsub= auth.onAuthStateChanged(async (user)=>{
    dispatch(userCreator(user))
     if(user)  //this will check if a user with same credentials exists or not.
     {
      let{uid,email}=user;   //destructuring
      let docRef=firestore.collection("users").doc(uid); //if the user with same uid does not exists this will reference of a fake document
      let doc=await docRef.get();
      if(!doc.exists)
      {
        docRef.set({ //this will set the value in the fake document and it will become a valid document
          email,
        })
      }
     }
    })
    return ()=>{//this is a cleanup function which executes when our component gets unmounted from the screen
      unsub(); //to prevent memory leak because onAuthStateChanged is kind of an event listener which stays in the memory
    };
  },[])
  return (
    <>
    
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/publicpreview'  element={<Publicpreview/>}>
       
       </Route>
      <Route path='/qualifications'  element={<Qualifications/>}>
       
       </Route>
      <Route path='/personal'  element={<PersonalData/>}>
       
       </Route>
        <Route path='/login'  element={<Login/>}>
       
        </Route>
        <Route path='/signup'  element={<Signup/>}>
       
        </Route>
        <Route path='/home'  element={<Home/>}>
       
        </Route>
        <Route path='/resume-builder'  element={<Home/>}>
       
        </Route>
        <Route path='/'  element={<Home/>}>
       
        </Route>
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
