// src/Title.js



import React from 'react'
import './Header.css';
import RoundButton from "./RoundButton";


function Title() {


  return (
    <div className="Title">
      <h1>Bonjour, Pr Jamel</h1>
      <p className="Title-Subtitle">Bienvenue dans mon espace personnel </p>
      
      <RoundButton />
      
    </div>

    
    
  )
}

export default Title