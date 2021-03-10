import React from 'react';
import './styles/Letter.css'

const Letter = (props) => {
    return (
        <div className='letter' onClick={props.click}>
            <h1 className='letter__h'>{props.letter}</h1>
        </div>
    );
}

export default Letter;
