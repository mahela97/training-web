import React,{useState,useEffect,useRef} from 'react'
import DiaryCard from '../components/DiaryCard';
import styles from './DiaryHome.module.css';
import { connect } from 'react-redux'
import { addCard,getCards } from '../Redux/diaryAction'
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import Header from '../components/Header';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

function DiaryHome(props) {

    const history = useHistory();
    const node = useRef();

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [collapse, setCollapse] = useState(false)

    const handleClickOutside = (e) => {
        if (node.current && node.current.contains(e.target)) {
            setCollapse(true)
          return;
        }
        setCollapse(false)
      };

    useEffect(() => {
        props.getCards()
        document.addEventListener('mousedown', handleClickOutside);
        if(!localStorage.getItem("nickName")){
            history.push("/")
        }
    })    

    const submit=()=>{
        if(!title){
            alert("Missing title")
            console.log("Missing title")
        }
        if(!description){
            alert("Missing description")
            console.log("Missing description")
        }
        else{
            props.addCard({"title":title,"description":description,"subtitle":localStorage.getItem("nickName")})
            setTitle("")
            setDescription("")
        }
    }

    return (
        <div className={styles.container}>

            <div className={styles.headerDiv}>
                <Header/>
            </div>

            <h1 style={{"color":"white"}}>
                Home
            </h1>

            <div>
                <div style={{"marginTop":"10px"}} onClick={()=>setCollapse(true)} >
                    <input value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Submit New"></input>
                </div>

               
                <Collapse ref={node} onMouseOver={()=>setCollapse(true)} in={collapse} timeout={1000}> 
                    <div style={{"marginTop":"20px"}}>
                        <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} rows="6" placeholder="Enter Description"></textarea>
                    </div> 

                    <div style={{"marginTop":"20px"}} onClick={submit} className={styles.submitButtom}>
                        <div>
                            <h3>SUBMIT</h3>
                        </div>
                    </div> 
                </Collapse>
                
                
            </div>

            <div>
                <div className={styles.cardContainer}>
                    <Grid justify="center" container spacing={0}>
                    {props.cards.map((card,index)=>{
                        return(
                            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>        
                                    <DiaryCard  title={card.title} subtitle={card.subtitle} description={card.description} bgColor="#b3e9fe"/>
                            </Grid>
                        )
                    })}
                    </Grid>
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
        addCard: (cardDetails) => dispatch(addCard(cardDetails)),
        getCards:()=>dispatch(getCards())
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DiaryHome)