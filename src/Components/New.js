import React, { useState } from 'react'

function New() {
    const [num, setNum] = useState(0);
    
    const incFun = () =>{
        setNum(num +1);
        
    }
    const decFun = () =>{
        if(num > 0){
            setNum(num -1);
            
        }
        
    }
    const reset = () =>{
        setNum(0);
        
    }
    return (
    <>
    <div className="new">

    <h1>{num}</h1>
    <button onClick={incFun}>Incerment</button>
    <button onClick={decFun}>Decerment</button>
    <br />
    <button onClick={reset}>Reset</button>
    </div>
    </>
  )
}

export default New;