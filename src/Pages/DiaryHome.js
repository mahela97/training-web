import React,{useState} from 'react'
import DiaryCard from '../Components/DiaryCard';
import styles from './DiaryHome.module.css';

function DiaryHome() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [cards, setCards] = useState([])

    const submit=()=>{

        if(!title){
            console.log("Missing title")
        }

        if(!description){
            console.log("Missing description")
        }

        else{
            setCards([{"title":title,"description":description},...cards])
            setTitle("")
            setDescription("")
        }
        
    }

    return (
        <div>
            <div>
                HOME
            </div>

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

            <div>
                <div className={styles.cardContainer}>
                    {cards.map(card=>{
                        return(
                            <div className={styles.item}>
                                <DiaryCard title={card.title} subtitle="Kasun" description={card.description} bgColor="#b3e9fe"/>
                            </div>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}

export default DiaryHome
