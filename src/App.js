// src/App.js

import React from 'react';

import './App.css';
import Header from './Header';
import TeacherNav from './TeacherNav';




function App() {


  return (
    <div className="App">
      <Header />

      <div className="container">

        <div><TeacherNav /></div>
        <hr className="divider"></hr>
        <div className="box">
          <h3 className="titre">Emargements non faits</h3>
          <h3>Aucun émargements</h3>
        </div> <hr />
        <div className="box">
          <h3 className="titre">Mes émargements </h3>
          <br />
          <h3>Samedi 17 Dec 2022</h3>
          <p>Science islamiques 2éme année</p>
          <p className="Title-Subtitle2">Sam 10h30 à 13h30</p>
        </div><hr />
        <div className="box">
          <h3 className="titre">  Mon agenda </h3>
          <br />
          <h3>Samedi 17 Dec 2022</h3>
          <p>Science islamiques 2éme année</p>
          <p className="Title-Subtitle2">Sam 10h30 à 13h30</p>
                    
          <p>Science islamiques 1ème année</p>
          <p className="Title-Subtitle2">Sam 14h30 à 17h30</p>
          <br />
          <h3>Lundi 19 Dec 2022</h3>
          <p>Science islamiques 2éme année</p>
          <p className="Title-Subtitle2">Sam 10h30 à 13h30</p>

        </div>

      </div>


    </div>
  );
}

export default App;
