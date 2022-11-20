import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeDetails } from '../actions';
import { Link } from 'react-router-dom';
import foto_default from '../Images/LogoHenryFood_grande.png';
import "./recipedetails.css";
 

export default function RecipeDetails(props) {
    const dispatch = useDispatch();
    const id = props.match.params.id;
     
    
    useEffect(() => {
        dispatch(getRecipeDetails(id))
    }, [dispatch, id]);
     
    
    const recipeDetails = useSelector(state => state.recipeDetails);
    
    return (
        <div className='contenedor2'>
            <div className='imagenRecipe2'>
          
                    <img className="detailImg2" 
                    src={recipeDetails.image ? 
                    recipeDetails.image : 
                    foto_default} alt="Pic not found"/>
            </div>
            
        
            <div className="details" key={id}>

                <h1 className="texts">{recipeDetails.name}</h1>

                {recipeDetails.dishTypes ?
                <div className="ddsh">
                    <h3 className="texts2">Dish Type: </h3>
                    {recipeDetails.dishTypes?.map(e => {
                        return(
                            <p className="dishesanddiets" key={e}>{e} </p>
                        )
                    })}
                </div> :
                <br />
                }

                <div className="ddsh">
                    <h3 className="texts2">Diet Type: </h3> 
                    {recipeDetails.dietTypes ? recipeDetails.dietTypes.map(e => {
                        return(
                            <p className="dishesanddiets" key={e}>{e} </p>
                        )
                    }) :
                    recipeDetails.diets?.map(e => {
                        return(
                            <p className="dishesanddiets" key={e.name}>{e.name} </p>
                        )
                    })}
                </div>

                <div className="ddsh">
                    <h3 className="texts2">Summary: </h3>
                    <p className="summary">{recipeDetails.summary?.replace(/<[^>]*>/g, '')}</p>
                </div>
                
                <div className="ddsh">
                    <h3 className="scores">Score: </h3>
                    <p className="dishesanddiets">{recipeDetails.score}</p>                    
                </div>   
              
                <div className="ddsh">
                    <h3 className="texts2">Steps: </h3>
                    <ul className="steps">{Array.isArray(recipeDetails.steps) ? recipeDetails.steps.map(e => {
                    return(
                        <li key={e.number}> {e.number}- {e.step}</li>
                        )
                }) :
                <li>{recipeDetails.steps}</li>
                }</ul>
                </div>
                
                <Link to="/home">
                    <button className="backButton2">Go back to see Recipes</button>
                </Link>
                
            </div>

        </div>

    )      
        
}