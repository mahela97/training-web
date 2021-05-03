import {ADD_CARD}  from "./diaryTypes"

export const addCard = (cardDetails)=>{
    return {
        type: ADD_CARD,
        payload:cardDetails
    }
}