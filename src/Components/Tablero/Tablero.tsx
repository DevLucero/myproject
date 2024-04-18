import React from "react";
import './Tablero.css';
import CustomButton from "../CustomButton/CustomButton";

function Tablero(){
    return(
        <>
            <div className="filaTTC">
                <CustomButton posicion={1}/>
                <CustomButton posicion={2}/>
                <CustomButton posicion={3}/>
            </div>
            <div className="filaTTC">
                <CustomButton posicion={4}/>
                <CustomButton posicion={5}/>
                <CustomButton posicion={6}/>
            </div>
            <div className="filaTTC">
                <CustomButton posicion={7}/>
                <CustomButton posicion={8}/>
                <CustomButton posicion={9}/>
            </div>
        </>
    );
}


export default Tablero;