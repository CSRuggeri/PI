import React, { useState } from "react";
import styles from './Card.module.css';
import { Link } from "react-router-dom";
import {connect} from "react-redux"
import { addFavorite, removeFavorite } from "../../Redux/Action";


  

const Card = ({
  image, 
  name,
  species,
  gender, 
  id,
  status, 
  origin,
  character,
  onClose, 
  addFavorite,
  removeFavorite,}) =>{  
   
  
  
  const [fav, setFav] = useState(false)

   
 

  function handleFavorite(character){
if(!fav){
  addFavorite(character)
  setFav(true)
}else{
  removeFavorite(character)
  setFav(false)
}


  }
  
  
  return (
    <div className={styles.div}>
      <button className={styles.btn} onClick={()=>onClose(id)}> X </button>
      {
   fav ? (
      <button className={styles.fav} onClick={handleFavorite}>❤️</button>
   ) : (
      <button className={styles.fav} onClick={handleFavorite}>🤍</button>
   )
}


      <Link to={`/detail/${id}`}>
        <h1 className={styles.name}>{name}</h1>
      </Link> 
      
      <img className={styles.image} src={image} alt={name} />

      <div className={styles.data} >
        <h4 className={styles.cardInfo} >{species}</h4>
        <h4 className={styles.cardInfo}>{gender}</h4>
        <h4 className={styles.cardInfo}>{origin}</h4>
        <h4 className={styles.cardInfo}>{status}</h4> 
      </div>
      
    </div>
  );
};


const mapDispatchToProps=(dispatch)=>{
return{
  addFavorite: (character )=>dispatch (addFavorite(character)),

  removeFavorite: (id) => dispatch(removeFavorite(id))
}
}
const mapStateToProps =(state)=>{
  return{
    favorites: state.myFavorites
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card)
