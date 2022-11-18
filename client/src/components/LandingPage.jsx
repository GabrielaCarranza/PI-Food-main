import React from "react";
import { Link } from 'react-router-dom';
import './landingpage.css';
import foto from '../Images/background_first.png';
import fotoLogo from '../Images/LogoHenryFood.png';
 
export default function LandingPage() {
    return (
              
       

        <div className="contenedor">
             <div className='Presentation'>
                <img src={fotoLogo} alt="Logo de Henry Food" />                
             </div>
 
            <div className="landing">

                <div className="ingLandPage">              
                    <img id="foto" src={foto} alt="Muestra foto de food " />                   
                </div>

                <div className="textoLandPage">            
                    <h2 className="welcomeMsg">What do you like to cook?</h2>
                    <h3 className="welcomeMsg2">What type of recipes do you need?</h3>
                    <h3 className="welcomeMsg2">You are in the right place!</h3>
                    <Link to='/home' id="click">
                        <button className="homeButton">Let's go !</button>
                    </Link>
                </div>

                
            </div>
        </div>
        
    )
}
