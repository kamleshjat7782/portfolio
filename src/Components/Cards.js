import React from 'react'
import Button from './Button';

function Cards(props) {
  
  return (
    <>
    
      <div className="cards-list">

        <h3>{props.project} </h3>
        <div className="img">
        <img src={`${props.img}`} alt={props.img} />
        </div>
        <p> {props.discription}</p>
        <button onClick={props.button}> Read More</button>
        {/* <Button btnName = "handleBtn" /> */}
        
      </div>
    
    </>
  )
}

export default Cards;
