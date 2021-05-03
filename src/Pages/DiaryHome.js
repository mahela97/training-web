import React,{useState} from 'react'
import DiaryCard from '../components/DiaryCard';
import styles from './DiaryHome.module.css';
import { connect } from 'react-redux'
import { addCard } from '../Redux/diaryAction'
import PropTypes from 'prop-types';

function DiaryHome(props) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const submit=()=>{

        if(!title){
            console.log("Missing title")
        }

        if(!description){
            console.log("Missing description")
        }

        else{
            props.addCard({"title":title,"description":description})
            setTitle("")
            setDescription("")
        }
        
    }

    return (
        <div>
            <h1>
                HOME
            </h1>

            <div style={{"marginTop":"10px"}} >
                <input value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Submit New"></input>
            </div>

            <div style={{"marginTop":"10px"}}>
                <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} rows="6" placeholder="Enter Description"></textarea>
            </div> 

            <div style={{"marginTop":"10px"}} onClick={submit} className={styles.button}>
                <div>
                    <h3>SUBMIT</h3>
                </div>
            </div> 

            <div>
                <div className={styles.cardContainer}>
                    {props.cards.map((card,index)=>{
                        return(
                            <div key={index} className={styles.item}>
                                <DiaryCard  title={card.title} subtitle="Kasun" description={card.description} bgColor="#b3e9fe"/>
                            </div>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}

DiaryHome.propTypes = {
    cards:PropTypes.array,
    addCard:PropTypes.func
};


const mapStateToProps = state => {
    return {
      cards: state.cards
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        addCard: (cardDetails) => dispatch(addCard(cardDetails))
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DiaryHome)