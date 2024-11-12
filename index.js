// Complete the following functions to make our program work!

/**
 * Converts the given Fahrenheit temperature `f` to Celsius.
 * @param {number} f temperature in °F
 * @returns {number} temperature in °C
 */
function convertToCelsius(Fahrenheit) {
  let celsius = (Fahrenheit - 32) *5 /9
  return Math.round(celsius * 100) /100
  }
  
  /**
   * | Temperature | Description |
   * | ----------- | ----------- |
   * | < 32        | "very cold" |
   * | < 64        | "cold"      |
   * | < 86        | "warm"      |
   * | < 100       | "hot"       |
   * | >= 100      | "very hot"  |
   *
   * @param {number} f temperature in °F
   * @returns {string} the description from the table above corresponding to
   * the given Fahrenheit temperature `f`
   */
  function describeTemperature(fahrenheit, celsius) {
    let feeling;
    
    // Determine how the temperature feels
    if (celsius <= 0) {
        feeling = "It's freezing!";
    } else if (celsius <= 10) {
        feeling = "It's cold.";
    } else if (celsius <= 20) {
        feeling = "It's cool.";
    } else if (celsius <= 30) {
        feeling = "It's warm.";
    } else {
        feeling = "It's hot!";
    }
    
    // Return the message
    return `${fahrenheit}°F is ${celsius}°C. ${feeling}`;
}
  /**
   * @param {number} limit
   * @returns {number} a random integer in the range [0, `limit`)
   */
  // Function to generate a random number between 0 and the given limit
function createMessage(limit) {
  return Math.floor(Math.random() * (limit + 1));
}

// Example usage:
// Generate a random Fahrenheit temperature between 0 and 100
let fahrenheit = createMessage(100);
// Convert the Fahrenheit temperature to Celsius
let celsius = convertToCelsius(fahrenheit);
// Create a message based on the temperature
let message = createMessage(fahrenheit, celsius);

// Print the message to the console
console.log(message);
  
  // -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //
  /**
   * Converts the given temperature from Fahrenheit to Celsius,
   * then alerts the user with a descriptive message.
   * @param {number} f temperature in °F
   */
  function parseFahrenheit(f) {
    const c = convertToCelsius(f);
    const description = describeTemperature(f);
    const message = `${f}°F is ${c}°C. That is ${description}.`;
    alert(message);
  }
  
  const fahrenheitPrompt =
    "Please enter a number. We will convert that temperature from Fahrenheit to Celsius.";
  let f = prompt(fahrenheitPrompt);
  parseFahrenheit(+f);
  
  alert("Let's try that again.");
  f = prompt(fahrenheitPrompt);
  parseFahrenheit(+f);
  
  alert("Let's try some random temperatures.");
  f = getRandomInt(110);
  parseFahrenheit(f);
  
  f = getRandomInt(110);
  parseFahrenheit(f);