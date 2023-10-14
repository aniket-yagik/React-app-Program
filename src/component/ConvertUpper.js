import { useState } from "react";

export default function ConvertIntoUpperCaseForm(props){

    var[text,setText]=useState('This is Default Value of Variable');


    function onChangeHandler(event){
        setText(event.target.value);
    }
    function onClickHandler(event){
        setText(text.toLocaleUpperCase());
    }
    
        return(
            <>
            <div className="container">
            <h1 className="mt-5">Write Code to Convert into UpperCase</h1>
            
            <div className="container mt-3">
                <textarea name="" id="" cols="90" rows="10" className="bg-dark text-white" value={text} onChange={onChangeHandler}></textarea>
            </div>

            <div onClick={onClickHandler} className="btn btn-outline-primary mt-2">
               Convert Into Upper Case
            </div>
            </div>
            </>
        )
    
        }