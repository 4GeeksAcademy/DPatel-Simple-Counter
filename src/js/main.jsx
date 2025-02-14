import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// component
import SecondsCounter from "./components/SecondsCounter.jsx";

let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
    const four = Math.floor(counter / 1000) % 10;
    const three = Math.floor(counter / 100) % 10;
    const two = Math.floor(counter / 10) % 10;
    const one = Math.floor(counter / 1) % 10;
    counter++;
    
    root.render(
        <SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />
    );
}, 1000);