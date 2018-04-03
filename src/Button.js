import React, { Component } from 'react';

class Button extends Component {
    render() {
        const valueRowOne = ['C', 'CE', 'log', 'x'];
        const valueRowTwo = [7, 8, 9, '/'];
        const valueRowThree = [4, 5, 6, '+'];
        const valueRowFour = [1, 2, 3, '-'];
        const valueRowFive = ['.', 0, '**', '='];
        const buttonThis = this;

        function createRow(valueRow) {
            return (
                <div className='row'>
                    {valueRow.map(value => {
                    return (
                        <button className='bt' value={value} key={value} id={value} onClick={buttonThis.props.onClick}>
                        {value}
                        </button>
                    )
                    })}
                </div>
            )
        }

        return (
            <div>
                {createRow(valueRowOne)}
                {createRow(valueRowTwo)}
                {createRow(valueRowThree)}
                {createRow(valueRowFour)}
                {createRow(valueRowFive)}
            </div>
        );
    }
};

export default Button;