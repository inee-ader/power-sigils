import React, { Component } from 'react';
import './styles/Main.css'
import Letter from './Letter'


class Main extends Component {

    state = {
        input: '', 
        output: []
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

    startOverHandler = () => {
        this.setState({
            input: '', 
            output: []
        })
    }

    renderLetters = () => {
        return this.state.output.map((letter, index) => {
            return <Letter letter={letter.toUpperCase()} key={index} click={() => this.deleteLetter(index)}/>
          });
    }

    deleteLetter = (letterIndex) => {
        const letters = [...this.state.output]
        letters.splice(letterIndex, 1)
        this.setState({output: letters})
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
                    onClick={() => this.startOverHandler()}
                >Start over</button>

                <br></br>
                <p className='main__p'>...first remove all the vowels</p>
                <p className='main__p'>...then remove all the repeated consonants</p>
                <div className='main__glyphs'>
                    {this.renderLetters()}
                </div>
                <p className='main__p'>...now draw a symbol that incorporates the remaining letters</p>
            </div>
        );
    }
}

export default Main;
