import fb from "../../../../config/firebaseConfig"

export default function addCardtoFirebase(action){
    fb.firestore().collection("cards")
        .add(action.payload)
}