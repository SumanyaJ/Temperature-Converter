function convertTemperature() {
  var inputTemperature = parseFloat(document.getElementById('temperatureInput').value);
  var unit = document.getElementById('unitSelect').value;
  var resultElement = document.getElementById('result');
  var convertedTemperature;

  if (isNaN(inputTemperature)) {
    resultElement.textContent = 'Please enter a valid number.';
    return;
  }

  if (unit === 'celsius') {
    convertedTemperature = (inputTemperature * 9/5) + 32;
    resultElement.textContent = 'Result   = ' + convertedTemperature.toFixed(2) + '°F';
  } else if (unit === 'fahrenheit') {
    convertedTemperature = (inputTemperature - 32) * 5/9;
    resultElement.textContent = 'Result   = ' + convertedTemperature.toFixed(2) + '°C';
  } else if (unit === 'kelvin') {
    convertedTemperature = inputTemperature - 273.15;
    resultElement.textContent = 'Result   = ' + convertedTemperature.toFixed(2) + '°C';
  }
}
