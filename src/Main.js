import React, { Component } from 'react';
import './styles/Main.css'


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
        let string = this.state.input
        let letterObj = {}, 
            newString = '', 
            regex = /[aeiou\s\W]/i
        for (let i = 0; i < string.length; i++) {
            let currentChar = string[i].toUpperCase()
            if (!regex.test(currentChar) && !letterObj[currentChar]){
                newString += currentChar
                letterObj[currentChar] = 1
            }else if (!regex.test(currentChar)){
                letterObj[currentChar] += 1
            }
        }
        console.log(newString)
        this.setState({output: newString})
    }

    startOverHandler = () => {
        this.setState({
            input: '', 
            output: []
        })
    }

    render() {

        return (
            <div className='main'>
                <h3 className='main__h'>Sigils are a powerful way to set your intentions and manifest your desires.</h3>
                <p className='main__p'>Start by forming a present-tense statement for what you want to call in...</p>
                <p className='main__p'>Keep it simple and use strong words...</p>
                <br></br>
                
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
                >Process</button>
              
                <button 
                    className='main__button'
                    onClick={() => this.startOverHandler()}
                >Reset</button>

                <p className='main__p'>...you are left with the paramount letters to your affirmation</p>
                <h2 className='main__letters'>
                    {this.state.output}
                    <br></br>
                </h2>
                <p className='main__p'>...draw a single glyph that incorporates the remaining letters</p>
            </div>
        );
    }
}

export default Main;
