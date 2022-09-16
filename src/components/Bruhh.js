import React from 'react';
import sound from "./../sounds/bruhh.mp3";

export default function Bruhh() {
    const bruhh=new Audio(sound);
    const start=()=> {
        bruhh.play();
    }   
    return (

    <button onClick={start}>BRUHHHH</button>
  )
}
