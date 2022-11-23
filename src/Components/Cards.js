import React from 'react'
import { Link } from 'react-router-dom';

function Cards(props) {
  
  return (
    <>
    
      <div className="cards-list">

        <h3>{props.project} </h3>
        <div className="img">
        <img src={`${props.img}`} alt={props.img} />
        </div>
        <p> {props.discription}</p>
        <button> <Link to = '/cardDetails'>  Read More </Link> </button>
        
      </div>
    
    </>
  )
}

export default Cards;
