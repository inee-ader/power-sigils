import React, { Component } from 'react';
import './styles/Main.css'
import Letter from './Letter'

class Main extends Component {

    state = {
        input: '', 
        output: ''
    }

    inputChangeHandler = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    processOutput = () => {
        let intention = this.state.input
        let output = intention.split('').filter(char => char !== ' ')
        
        this.setState({
            output: output
        })
    }

    startOver = () => {
        this.setState({
            input: '', 
            output: ''
        })
    }

    renderOutput = () => {
        if (this.state.output.length) {
            this.state.output.map((letter, index) => {
                return <Letter letter={letter} key={index} />
            })
        }
    }

    render() {

        return (
            <div className='main'>
                <h3 className='main__h'>Sigils are a powerful way to set your intentions and manifest your desires.</h3>
                <p className='main__p'>Start by forming a present-tense statement for what you want to call in...</p>
                <p className='main__p'>Keep it simple and use strong words...</p>
                
                <textarea 
                    className='main__textarea' 
                    type='text' 
                    placeholder='...your intention goes here' 
                    value={this.state.input} 
                    onChange={this.inputChangeHandler}>
                </textarea>
                <button 
                    className='main__button'
                    onClick={() => this.processOutput()}
                >Process sigil</button>
                <button 
                    className='main__button'
                    onClick={() => this.startOver()}
                >Start over</button>
                <div className='main__glyphs'>
                    {this.renderOutput()}
                </div>
            </div>
        );
    }
}

export default Main;
