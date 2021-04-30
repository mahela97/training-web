import React,{useState} from 'react'
import styles from './DiaryHome.module.css';

function DiaryHome() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const submit=()=>{
        console.log(title,description)
        setTitle("")
        setDescription("")
    }

    return (
        <div>
            <div style={{"marginTop":"10px"}} >
                <input value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Submit New"></input>
            </div>

            <div style={{"marginTop":"10px"}}>
                <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} rows="6" placeholder="Enter Description"></textarea>
            </div> 

            <div style={{"marginTop":"10px"}} onClick={submit} className={styles.button}>
                <div>
                    SUBMIT
                </div>
            </div> 
        </div>
    )
}

export default DiaryHome
