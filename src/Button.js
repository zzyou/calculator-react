import React, { Component } from 'react';

class Button extends Component {
    render() {
        const buttonThis = this;

        const rows = [
            ['AC', 'C', '%', 'x'], 
            ['7', '8', '9', '÷'], 
            ['4', '5', '6', '+'], 
            ['1', '2', '3', '-'], 
            ['.', '0', '^', '=']
        ];

        function createRows(rows) {
            return (
                <div>
                    {rows.map(row => createRow(row))}
                </div>
            )
        }
        
        function createRow(row) {
            return (
                <div className='row' key={rows.indexOf(row).toString()}>
                    {row.map(value => {
                        return (
                            <button 
                                className='bt' 
                                value={value} 
                                key={value.toString()}
                                id={value} 
                                onClick={buttonThis.props.onClick}>
                                    {value}
                            </button>
                        )
                    })}
                </div>
            )
        }

        return createRows(rows);
    }
};

export default Button;