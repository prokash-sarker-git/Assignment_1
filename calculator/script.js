function calculate() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;
    let result;
  
    if (isNaN(num1) || isNaN(num2)) {
      result = "<span class='invalid'>Please enter valid numeric values for both numbers.</span>";
    } else {

      switch(operation) {
        case 'add':
          result = num1 + num2;
          break;
        case 'subtract':
          result = num1 - num2;
          break;
        case 'multiply':
          result = num1 * num2;
          break;
        case 'divide':
          if (num2 !== 0) {
            result = num1 / num2;
          } else {
            result = "<span class='invalid'>Cannot divide by zero!</span>";
          }
          break;
        default:
          result = "<span class='invalid'>Invalid operation</span>";
      }
    }
    document.getElementById('result').innerHTML = result;
  }