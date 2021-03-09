import React from 'react';
import './styles/Letter.css'

const Letter = (props) => {
    return (
        <div className='letter'>
            <h1>{props.letter}</h1>
        </div>
    );
}

export default Letter;
