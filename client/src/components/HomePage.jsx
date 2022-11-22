import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes, dietTypeFilter, aplhabeticalSort, scoreSort,getDietTypes } from '../actions';
import Recipe from './Recipe';
import { Link } from 'react-router-dom'
import Paged from './Paged';
import SearchBar from './SearchBar';
import './HomePage.css';
import fotoLogo from '../Images/LogoHenryFood.png';
import foto_default from '../Images/LogoHenryFood_grande.png';

 

let prevId = 1;

export default function Home() {
    
    const dispatch = useDispatch();
    const allRecipes = useSelector((state) => state.recipes);
    const dietTypes = useSelector((state) => state.dietTypes);
    
    const [order, setOrder] = useState('')
    
    
    const [page, setPage] = useState(1);
    //defino que se muestren 9 recetas por página
    /* const [recipesPage, setRecipesPage] = useState(9); */
    const [recipesPage] = useState(9);
    
    const quantityRecipesPage = page * recipesPage;
    const firstRecipePage = quantityRecipesPage - recipesPage;
    const showRecipesPage = allRecipes.slice(firstRecipePage, quantityRecipesPage);
    
    const paged = function(pageNumber) {
        setPage(pageNumber)
    };


    useEffect(() => {
        dispatch(getRecipes())
    }, [dispatch]);

    useEffect(() => {
        dispatch(getDietTypes());
    }, [dispatch]);

   /*  function handleClick(e) {
        e.preventDefault();
        dispatch(getRecipes());
        setPage(1);
    } */

    function handleDietTypeFilter(e) {
        e.preventDefault();
        dispatch(dietTypeFilter(e.target.value))
        setPage(1);
    }

    function handleAlphabeticalSort(e) {
        e.preventDefault();                
        dispatch(aplhabeticalSort(e.target.value))
        setPage(1);
        //console.log(`Order ${e.target.value}`);
        setOrder(`Order ${e.target.value}`);
    }
    
    function handleScoreSort(e) {
        e.preventDefault();                
        dispatch(scoreSort(e.target.value));
        setPage(1);
        setOrder(`Order ${e.target.value}`);
    }
    
  
    return(
        <div className="home">
            <div className='Presentation'>
                <img src={fotoLogo} alt="Logo de Henry Food" />
                <h1 className="initialMsg">Let's do it!</h1>
            </div>


            <div className='zonaBotones'>

                <div>
                    <SearchBar/>
                </div>

                <div className='zonaRecipeAdd'>
                    <Link to="/recipe">
                        <button className="addButton">Add new Recipe</button>
                    </Link>              
               </div>

               <div className='zonaTypeAdd'>
                    <Link to="/type">
                        <button className="addTypeButton">Add new Type of Recipe</button>
                    </Link>              
               </div>
                
            </div>

          

            <div className="zonaMain ">
                <div className="zonaSelectOrder">
                    <label className="filters">Sort:</label>  
                    <select className="selectSort" name="alphabetical" onChange={e => handleAlphabeticalSort(e)}>
                        <option disabled selected>Alphabetical</option>
                        <option value="atoz">A to Z</option>
                        <option value="ztoa">Z to A</option>
                    </select>

                    <select className="selectSort" name="numerical" onChange={e => handleScoreSort(e)}>
                        <option disabled selected>Score</option>
                        <option value="asc">From Min to Max</option>
                        <option value="desc">From Max to Min</option>
                    </select>
                    <br/>  
                  
                    <label className="filters">Diet Types:</label>
                    <select className="selectSort" name="diets" onChange={e => handleDietTypeFilter(e)}>
                    <option disabled selected>Select...</option>
                    <option value="all">All</option>
                    {dietTypes.map(op => (
                        
                        <option key={op} value={op}>
                            {op}
                        </option>
                    ))}
                      
                    </select>
                </div>

                <div className="zonaMostrar">            
                
                    <Paged recipesPage={recipesPage} 
                    allRecipes={allRecipes.length} 
                    paged={paged}/>           
                

                    <div className="allrecipes">
                    {
                        showRecipesPage?.map(e => {
                            return (
                                <div className="eachRecipe" key={prevId++}>
                                    <Link className="linkRecetas" to={`home/${e.id}`}>
                                        <Recipe
                                            image={e.image ? 
                                                e.image :
                                                foto_default}
                                            name={e.name}                             
                                            dietTypes={e.dietTypes} 
                                            score={e.score}
                                            />
                                    </Link>
                                </div>
                            )
                        })
                    }
                    </div>   

                    
                    <Paged recipesPage={recipesPage} allRecipes={allRecipes.length} paged={paged}/>
                </div>
            </div>
        </div>
    )
}