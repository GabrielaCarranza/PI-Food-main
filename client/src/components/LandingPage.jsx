import React from "react";
import { Link } from 'react-router-dom';
import './landingpage.css';
import foto from '../Images/background_first.png';

export default function LandingPage() {
    return (
              
        <div className="landing">
            <dir className="ingLandPage">
              
                <img id="foto" src={foto} alt="Muestra foto de food " />                   
            </dir>

            <dir className="textoLandPage">            
                <h2 className="welcomeMsg">Do you like cooking?</h2>
                <h3 className="welcomeMsg2"> This is your place!</h3>
                <Link to='/home' id="click">
                    <button className="homeButton">Let's go !</button>
                </Link>
            </dir>
        </div>
        
    )
}
