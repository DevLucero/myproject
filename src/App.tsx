import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomButton from './Components/CustomButton/CustomButton';
import Tablero from './Components/Tablero/Tablero';
import Navbar from './Components/Navbar/Navbar';
import ChatWebSocket from './Components/ChatWebSocket/ChatWebSocket';

function App() {
  return (
    <>
    <ChatWebSocket/>
    </>
  );
}

export default App;
