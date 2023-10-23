import { firestore } from "../../firebase";

export const saveResumeCreator=()=>{
    return {
        type:"SAVE_RESUME",
    }
}

export const saveErrorCreator=(err)=>{
    return {
        type:"SAVE_ERR",
        payload:err,
    }
}
export const saveCompletedCreator=(id)=>{
    return {
        type:"SAVE_COMPLETED",
        payload:id,
    }
}

//special action -will go to thunk middleware which will execute this action
//1.Add into firestore -this will return a promise
//2.save completed resume using doc.id
//3.catch error if there's any
export const saveResume = (uid,details,code)=>{
    return (dispatch)=>{
        dispatch(saveResumeCreator);
        firestore.collection("resume").add(
            {
                uid,
                details,
                code,
            }).then((docRef)=>{
               return docRef.get();
            }).then((doc)=>{
              dispatch(saveCompletedCreator(doc.id))
            }).catch((err)=>{
                dispatch(saveErrorCreator(err))
            })
        

    }
}