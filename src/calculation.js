function calculation(value, state) {
  if (value === 'C' || value === 'AC') {
    return {
      result: ''
    };
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
      && (result[i] !== '.') ) {

      let operator = result[i];
      let finalOperator = result[result.length - 1];
      num1 = parseFloat(result.slice(0, i));
      num2 = parseFloat(result.slice(i + 1, result.length - 1));

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
        finalNum = num1 * num2;
      }

      else if (operator === '%') {
        finalNum = num1 % num2;
      }

      else if (operator === '^')  {
        finalNum = Math.pow(num1, num2);
      }

      if (finalOperator === '=') {
        state = finalNum.toString();
        return {
          result: state
        };
      }

      else {
        state = finalNum.toString().concat(finalOperator);
        return {
          result: state
        };
      } 
    }
  }

  return {
    result: result
  };
}

export default calculation;
