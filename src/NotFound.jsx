import React from 'react'
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div >
            <div ><h1 className='not-found-text'>Not Found Page (Error 404)</h1></div> <br />
            <Link to="/"><button className='go-back-btn' title="enviar" color="bg-red-500">Go back</button></Link>
        </div >
    )
}

export default NotFound