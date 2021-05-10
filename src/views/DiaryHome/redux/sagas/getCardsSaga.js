import { take, put} from 'redux-saga/effects';
import fb from "../../../../config/firebaseConfig"
import { eventChannel } from 'redux-saga'
import {GET_CARDS}  from "../diaryType"

export default function* watchForCards() {
    const ref=fb.firestore().collection("cards")
    const channel = eventChannel((emit)=>ref.onSnapshot(emit))
    while (true){
        try{
            const data = yield take(channel);
            const result = data.docs.map(doc=>{
                return doc.data()
            })
            yield put({type:GET_CARDS,payload:result})
        }
        catch(err){
            console.error('socket error:', err)
        }
    } 
}