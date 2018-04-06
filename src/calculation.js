function calculation(value, state) {
  if (value === 'C' || value === 'AC') {
    return {
      result: ''
    };
  }

  // number input won't hit this function in App.js, 
  // so I do not expect number input here.
  // But I still expect negative numbers and decimals.
  if (state === '' && value !== '-' && value !=='.') {
    return {
      result: ''
    };
  }

  // except negative number, I do not expect multiple operators here.
  if (state === '-' && isNaN(value)) {
    return {
      result: '-'
    }
  }

  let result = state.concat(value);
  
  if (value === '.') {
    if (state[state.length - 1] === '.') {
      return {
        result: state
      };
    }
    return {
      result: result
    };
  }
  
  let num1;
  let num2;
  let finalNum;

  for (let i = 0; i < result.length; i++) {

    if ( (isNaN(parseFloat(result[i]))) 
      && (i !== result.length - 1)
      && (i !== 0)
      && (result[i] !== '.') ) {

      let operator = result[i];
      let finalOperator = result[result.length - 1];
      num1 = parseFloat(result.slice(0, i));
      num2 = parseFloat(result.slice(i + 1, result.length - 1));

      if (isNaN(num2)) {
        return {
          result: num1.toString().concat(operator)
        }
      }

      if (operator === '=') {
        finalNum = num2;
      }

      if (operator === '+') {
        finalNum = num1 + num2;
      }

      else if (operator === '-') {
        finalNum = num1 - num2;
      }

      else if (operator === '÷') {
        finalNum = Math.round( (num1 / num2) * 100 ) / 100;
      }

      else if (operator === 'x') {
        finalNum = Math.round( (num1 * num2) * 100 ) / 100;
      }

      else if (operator === '%') {
        finalNum = num1 % num2;
      }

      else if (operator === '^')  {
        finalNum = Math.round( Math.pow(num1, num2) * 100 ) / 100;
      }

      if (finalOperator === '=') {
        result = finalNum.toString();
        return {
          result: result
        };
      }

      else {
        result = finalNum.toString().concat(finalOperator);
        return {
          result: result
        };
      } 
    }
  }

  return {
    result: result
  };
}

export default calculation;
