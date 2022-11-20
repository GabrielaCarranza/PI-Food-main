import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipesByName } from '../actions';
import './searchbar.css';


export default function SearchBar() {

    //estado local input
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    function handleChange(e) {    
        e.preventDefault();    
        setInput(e.target.value);
       /*  console.log(input); */
    };

    function handleSubmit(e) {    
        e.preventDefault();    
        try {
            //ENVÍO VALOR DEL INPUT AL getRecipesByName en ACTION
            dispatch(getRecipesByName(input));            
        } catch (error) {            
            return error;
        }
        //VUELVO EL VALOR DEL IMPUT A ''- REINICIALIZO EL VALOR DEL INPUT
        setInput('')        
    };   

    return (
        <div className="search">
            <input type="text" 
            className="searchInput" 
            placeholder="Search recipe by name" 
            value={input} onChange={e => handleChange(e)}/>

            <button className="searchButton" 
            type="submit"
            onClick={e => handleSubmit(e)}>Search</button>
        </div>
    )

};