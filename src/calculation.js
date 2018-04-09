function calculation(value, state) {
  if (value === 'C' || value === 'AC') {
    return {
      result: ''
    };
  }

  // number input won't hit this function as specified in App.js.
  // I do not expect operators to be the first input.
  // But I still expect negative numbers and decimals.
  if (state === '' && value !== '-' && value !=='.') {
    return {
      result: ''
    };
  }

  // the first input can be negative and even with decimals,
  // but I do not expect an operator right after it.
  if (state === '-' && value === '.') {
    return {
      result: '-.'
    };
  }
  else if (state === '-' && isNaN(value)) {
    return {
      result: '-'
    };
  }

  let result = state.concat(value);

  // accept a negative number after an operator.
  if (value === '-' && isNaN(state[state.length - 1])) {
    return {
      result: result
    };
  }

  // in case someone enters another '.' in the number, only accept the first '.'.
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

      // in case someone enters multiple operators, only accept the first operator.
      if (isNaN(num2)) {
        return {
          result: num1.toString().concat(operator)
        }
      }

      // in case someone enters '=' first, only accept the lastest number.
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
        finalNum = num1 / num2;
      }

      else if (operator === 'x') {
        finalNum = num1 * num2;
      }

      else if (operator === '%') {
        finalNum = num1 % num2;
      }

      else if (operator === '^')  {
        finalNum = Math.pow(num1, num2);
      }

      // round the result to four decimals if appliable.
      let resultNum = Math.round(finalNum * 10000) / 10000;

      if (finalOperator === '=') {
        result = resultNum.toString();
        return {
          result: result
        };
      }
      // if the second operator is not '=', we should continue the calculation.
      else {
        result = resultNum.toString().concat(finalOperator);
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
