// Function to convert Celsius to Fahrenheit
function 
CelsiusToFahrengeit(celsius) {
    return (celsius * 9/5) + 32;
}

// Example usage
const celsiusInput = prompt("Enter temperature in Celsius:");
const celsius = 
parseFloat(celsiusInput);

if (!isNaN(celsius)) {
    const fahrenheit = 
    celsiusToFahrenheit(celsius);
    console.log(`${celsius} °C is equal to ${fahrenheit.toFixed(2)}
    °F`);
} else {
    console.log("Please enter a valid number.");
}