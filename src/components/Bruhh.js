import React from 'react';
import sound from "./../sounds/bruhh.mp3";

export default function Bruhh() {
    const bruhh=new Audio(sound);
    const start=()=> {
        bruhh.play();
    }   
    return (

    <button onClick={start} style={{height: '20vh',width:'30vw',borderRadius:'2000px', backgroundColor:'red'}}><div style={{fontSize:'8vh'}}>BRUHHHH</div></button>
  )
}
