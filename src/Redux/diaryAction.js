import {ADD_CARD}  from "./diaryType"

export const addCard = (cardDetails)=>{
    return {
        type: ADD_CARD,
        payload:cardDetails
    }
}