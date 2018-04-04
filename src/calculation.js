function calculation(value, state) {
  if (value === 'C' || value === 'AC') {
      return {
        result: ''
      };
    }

  let num1;
  let num2;
  let finalNum;
  let result = state.concat(value);

  for (let i = 0; i < result.length; i++) {

    if ( (isNaN(parseFloat(result[i]))) 
      && (result[i] !== ".") 
      && (i !== result.length - 1) ) {

      let operator = result[i];
      num1 = parseFloat(result.slice(0, i));
      num2 = parseFloat(result.slice(i + 1, result.length - 1));

      if (operator === "+") {
        finalNum = num1 + num2;
      }

      else if (operator === "-") {
        finalNum = num1 - num2;
      }

      else if (operator === "÷") {
        finalNum = (num1 / num2).toFixed(2);
      }

      else if (operator === "x") {
        finalNum = num1 * num2;
      }

      else if (operator === "%") {
        finalNum = num1 % num2;
      }

      else if (operator === "^")  {
        finalNum = Math.pow(num1, num2);
      }

      state = finalNum.toString();

      return {
        result: finalNum.toString()
      };
    }
  }

  return {
    result: result
  };
}

export default calculation;
