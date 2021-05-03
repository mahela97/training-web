import {GET_CARDS}  from "./diaryType"
import fb from "../utils/firebaseConfig"

export const addCard=(cardDetails)=>{
    console.log("Came here")
    return (dispatch)=>{
        console.log("CAme to return")
        fb.firestore().collection("cards")
        .add(cardDetails)
    }
 
}

export const getCards=()=>{
    console.log("Came here")
    return (dispatch)=>{
        console.log("CAme to return")
        fb.firestore().collection("cards")
        .onSnapshot((querySnapshot) => {
            let cards = [];
            querySnapshot.forEach((doc) => {
                cards.push(doc.data());
            });
            console.log(cards);
            dispatch({type: GET_CARDS,payload:cards})
        });
    }
 
}