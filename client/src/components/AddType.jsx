import React from "react";
import './AddType.css';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { addType } from '../actions/index'


function validate(input) {
    const errors = {};
    if (!input.name) errors.name = 'Please complete with a type of recipe name';    
    return errors;
};

export default function AddType() {
    const dispatch = useDispatch();

    const [errors, setErrors] = useState({})    
    const [input, setInput] = useState({
        name: ''        
    })

    function handleChange(e) {
        e.preventDefault();
        setInput((prevInput) => {   
            const newInput = {
                ...prevInput,
                [e.target.name]: e.target.value
            }
            const validations = validate(newInput);
            setErrors(validations)
            return newInput
        });

    };
  
    function handleSubmit(e) {
        e.preventDefault();

        //CONTROL DE ERRORES
        if (Object.values(errors).length > 0) {
            alert("Please complete the information required");
        } else if (input.name === '' ){ alert("Please complete the form");}
       else {
        // ENVÍO EL VALOR DEL INPUT A ACTION addType
           dispatch(addType(input));
           alert('New type of recipe added successfully!')
           // REASIGNO VALOR AL INPUT
           setInput({
               name: ""            
           });
          
       }
   };

    
    return (
        <div>
            <h1 className="msg">Creat your own Type of Recipe!</h1>
            
            <form onSubmit={e => handleSubmit(e)}>
                <div className="form">
                    <div className="prettierForm">

                        <div className="nameInput">
                            <label className="msgs">Name:</label>
                            <input className="inputs" name="name" type="text" value={input.name} onChange={e => handleChange(e)}/>
                            {errors.name && (
                                <span className="errors">{errors.name}</span>
                            )}
                        </div>
                     </div>    
                </div>

                <button className="submitButton" type="submit">Submit type </button>

                <Link to="/home"><button className="goBackButton">Go back</button></Link>

            </form>
        </div>
    )
}