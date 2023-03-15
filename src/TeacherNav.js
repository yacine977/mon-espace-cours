import React from 'react';


function TeacherNav() {
  return (
    
    <nav>
      
      <ul className="navbar">
      
      
      <li><a href="#dashboard">Espace professeur</a></li>
        <li><a href="#dashboard">Tableau de bord</a></li>
        <li><a href="#groups">Mes groupes</a></li>
        <li><a href="#attendances">Mes émargements</a></li>
        <li><a href="#agenda">Mon agenda</a></li>
        <li><a href="#evaluations">Mes évaluations</a></li>
        <button className="rounded-button">Déclarer une AP</button> {/* Ajout du bouton arrondi */}
    
      </ul>
      
    </nav>
    
  );
}

export default TeacherNav;
