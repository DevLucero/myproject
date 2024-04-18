import React, { useState } from "react";
import './CustomButton.css';
import { strict } from "assert";
import { log } from "console";
import { resourceLimits } from "worker_threads";

interface Valores{
    texto:string
}
let moviments: number[] = []
let tableroDara: string[] = [
    '','','',
    '','',''
]
let convinaciones = [
    [1, 2 , 3], // - - -
    [4, 5 , 6], // - - -
    [7, 8 , 9], // - - -
    [1, 5 , 9],
    [3, 5 , 7],
    [1, 4 , 7],
    [2, 5 , 8],
    [3, 6 , 9]
]


function CustomButton({posicion}:any){
    // const [contador, setContador] = useState(0);

    // const sumar = () => {
    //     setContador(variable=>{
    //         return variable + 1;
    //     });
    // };

    // const resetContador = () =>{
    //     setContador(variable=>{
    //         return variable = 0;
    //     });
    // };
    const combos = ()=>{
        
    }

    const [movimientos, setMovimientos] = useState([]);
    const [estadoGato, setEstadoGato] = useState(' ');

    const funciones = (posicion:number)=>{
        changeStatus();

        // addmoviment(posicion);
        // combos();
    }

    const addmoviment = (posicion:number)=>{
        console.log(posicion)
        return posicion;
    }

    // el estado debe retornarse a add moviment para que de ahi llegue a combos
    const changeStatus = ()=>{
        var resul;
        setEstadoGato(estado=>{
            if(estado == ' '){
                estado = 'x'
                resul = estado;
                return estado;    
            }
            else if(estado == 'x'){
                estado = 'o';
                resul = estado;
                return estado;
            }
            else if(estado == 'o'){
                estado = ' ';
                resul = estado;
                return estado;
            }else{
                return estado;
            }
        });
       return resul;
    }

    return (
        <>
            <div className="containerBtn" onClick={() =>  { funciones(posicion) }}>
                <div className="btnCustom">
                    <button className="btnG">{estadoGato}</button>
                </div>
            </div>
        </>
    );    
}


export default CustomButton;