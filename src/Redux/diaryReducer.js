import {ADD_CARD} from "./diaryType"

const initialState ={
    cards:[],
}

const diaryReducer = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_CARD:
            return{
                ...state,
                cards:[action.payload,...state.cards]
            }
        default:
            return state   
    }    
}

export default diaryReducer