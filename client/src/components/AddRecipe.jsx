import React from "react";
import { useState, useEffect } from 'react'
import { useDispatch, useSelector, } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { getDietTypes, addRecipe } from '../actions/index';
import fotoLogo from '../Images/LogoHenryFood.png';
import './addrecipe.css';
 

function validate(input) {
    const errors = {};
    if (!input.name) errors.name = 'Please complete with a recipe name';
    if (!input.summary) errors.summary = 'Please add some comments about your recipe';
    if (input.score < 1 || input.score > 100) errors.score = 'The score must be a number between 1 and 100';  
    if (!input.steps.length) errors.steps = 'Please detail the steps for your recipe';
    if (!input.dietTypes.length) errors.dietTypes = 'You must select at least one diet type';
    return errors;
};
 

export default function AddRecipe() {
    const dispatch = useDispatch();
    //useSelector ->Hook que nos permite extraer datos del store
    const dietTypes = useSelector(state => state.dietTypes);
    // useHistory -> permite acceder al estado del enrutador y realizar la navegación desde el interior de sus componentes. Lo uso para que luego de cargar el formulario correctamente, me direcciona al home automáticamente
    const history = useHistory();

    //control de errores en la carga del form
    const [errors, setErrors] = useState({})    
    const [input, setInput] = useState({
        name: ''  ,
        summary: '',
        score: '',       
        steps: '',
        dietTypes: []
    })
    
    useEffect(() => {
        dispatch(getDietTypes());
    }, [dispatch]);

    function handleChange(e) {
        e.preventDefault();
        setInput((prevInput) => {   
            const newInput = {
                ...prevInput,
                [e.target.name]: e.target.value
            }
            const validations = validate(newInput);
            // por cada cambio de datos-> valida si hay errores
            setErrors(validations)
            return newInput
        });

    };
    
    function handleCheckBox(e) {       
        let newArray = input.dietTypes;
        let find = newArray.indexOf(e.target.value);
        
        if (find >= 0) {
            newArray.splice(find, 1)
        } else {
            newArray.push(e.target.value)
        }
        
        setInput({
            ...input,
            dietTypes: newArray
        });
        const validations = validate(input);
        setErrors(validations)        
    }
    
    function handleSubmit(e) {
         e.preventDefault();

         if (Object.values(errors).length > 0) {
            
            //hay errores de carga
             alert("Please complete the information required");
         } else if (
            input.name === '' && 
            input.summary === '' && 
            input.score === '' &&         
            input.steps === '' &&
            !input.dietTypes.length) {
            alert("Please complete the form");}
        else {
            // si hoy hay errores envío a actions los datos input
            dispatch(addRecipe(input));
            alert('New recipe added successfully!');
            // vuelvo a inicializar los datos de input
            setInput({
                name: "",
                summary: '',
                score: '',              
                steps: [],
                dietTypes: []
            });
            // me direcciona automáticamente al home luego de mostrar el cartel
            history.push('/home')
        }
    };
     
      
    return (

        <div className="contenedor3">
            <div className='Presentation3'>
                <img src={fotoLogo} alt="Logo de Henry Food" />                
                <h2 className="msg">Creat your own recipe!</h2>
            </div>
            
            <div className="addRecipe">                
                
                <form onSubmit={e => handleSubmit(e)}>
                    <div className="form">

                        <div className="prettierForm">

                            {/* name */}
                            <div className="nameInput">
                                <label className="msgs">Name:</label>
                                <input className="inputs" name="name" type="text" value={input.name} onChange={e => handleChange(e)}/>
                                {errors.name && (
                                    <span className="errors">{errors.name}</span>
                                )}
                            </div>

                            {/* summary */}
                            <div className="nameInput">
                                <label className="msgs">Summary:</label>
                                <textarea name="summary" type="text" rows="4" cols="30" value={input.summary} onChange={e => handleChange(e)}/>
                                {errors.summary && (
                                    <span className="errors">{errors.summary}</span>
                                )}
                            </div>

                            {/* score */}
                            <div className="nameInput">
                                <label className="msgs">Score:</label>
                                <input name="score" type="number" value={input.score} onChange={e => handleChange(e)}/>
                                {errors.score && (
                                    <span className="errors">{errors.score}</span>
                                )}
                            </div>
                        
                            {/* steps */}
                            <div className="nameInput">
                                <label className="msgs">Steps:</label>
                                <textarea name="steps" type="text" rows="4" cols="40" value={input.steps} onChange={e => handleChange(e)}/>
                                {errors.steps && (
                                    <span className="errors">{errors.steps}</span>
                                )}
                            </div>

                        </div>

                        {/* diet types */}
                        <div className="checkSelect">
                            <div className="nameInput">
                                <label className="msgs">Diet Types:  </label>
                                {dietTypes.map(d =>{
                                    return (
                                        <div key={d} className="checks">
                                            
                                            <input className="check"
                                            type="checkbox"
                                            name={d} value={d} 
                                            selected={input.dietTypes.includes(d)} onChange={e => handleCheckBox(e)}/>
                                            <label className="dietTyp">{d}</label>
                                        </div>
                                    )
                                })}
                                {errors.dietTypes && (
                                    <span className="errors">{errors.dietTypes}</span>
                                )}
                            </div>
                        </div>
                    </div>

                    <button className="submitButton"  type="submit" >Submit Recipe</button>

                    <Link to="/home"><button className="goBackButton">Go back</button></Link>
                    
                </form>


            </div>
        </div>    
    )

};