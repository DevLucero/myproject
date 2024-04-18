import React from "react";
import { useState,useEffect } from "react";
import './ChatWebSocket.css';
import { FiSend } from 'react-icons/fi';
import { send } from "process";

function ChatWebSocket(){
    const [mensaje, setMensaje] = useState('');
    const [mensajes, setMensajes] = useState<String[]>([]);
    const [socket, setSocket] = useState<WebSocket | null>(null);
    useEffect(()=>{
        const newSocket = new WebSocket('ws://localhost:8085');
        newSocket.onmessage = (evento) =>{
            evento.data.text().then((text:string)=>{
                console.log(text);
                setMensajes((prevMensajes)=>[...prevMensajes, text]); 
            });
        };
        newSocket.onclose = () => {
            console.log("desconectado");
        };
        setSocket(newSocket);
        return ()=>{
            newSocket.close();
        }
    },[]);

    const mandarMensaje = ()=>{
        if(socket && mensaje.trim()){
            // setMensaje((anterioresM)=>[
            //     ...anterioresM, mensaje
            // ]);
            socket.send(mensaje);
            setMensaje('');
        }
    };
    return (
            <>
            <div className="chat">
                <div className="chat-header">
                    Title
                </div>
                {/* bucle que muestre mensajes */}
                <div className="chat-message">
                   mensaje
                </div>
                <div className="chat-sender">
                    <input type="text" className="chat-send"
                    value={mensaje}
                    onChange={(evento=>{
                        setMensaje(evento.target.value)
                    })}
                    onKeyDown={(evento)=>{
                        if(evento.key == 'Enter'){
                            mandarMensaje();
                        }
                    }}/>
                    <FiSend></FiSend>
                </div>
            </div> 
            </>
    );
}

export default ChatWebSocket;
