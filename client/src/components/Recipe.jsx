import React from "react";
import './recipe.css';


let prevId = 1;

export default function Recipe(recipes) {
    const { image, name, dietTypes } = recipes
    
    return (
        <div className="recipe">
            
            <div className="zonaReciImg">
                <img className="recipeImg" src={image} alt="IMAGEN DE LA RECETA"/>
            </div>
             
            <div className="zonaRecipeName">
                <h4 className="recipeName">{name}</h4>            
            </div>

            <dir className="listaTiposDieta">
                <ul className="ulZona">
                    {dietTypes?.map(e => {
                        return (
                            // CONVERTIR EN MAYUSCULA EL TIPO DE DIETA
                            
                            <li className="diets" key={prevId++}>|{e}|</li>
                        
                        )
                    })}            
                </ul>
            </dir>
            
        </div>
    )
};
