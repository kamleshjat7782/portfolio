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
        {/* <button> <a href = {props.button}  target="_blank" rel="noopener noreferrer">Read more </a> </button> */}
        {/* <button> <Link to='./cardDetails'>Read more</Link> </button> */}
        <button><Link to='../projectData'>Learn More</Link></button>
        
      </div>
    
    </>
  )
}

export default Cards;
