'use strict';
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
let temperatures1 = [3, -2, -10, -1, 'error', 9, 13, 17, 15, 14, 9];

function calculateTempAmplitude(temperatures, temperatures1) {
    let maxTemp, minTemp;
    let allTemp = (Array.isArray(temperatures1)) ? temperatures.concat(temperatures1) : temperatures;

    maxTemp = minTemp = allTemp[0];

    for (let currentTemp of allTemp) {
        if (Number(currentTemp)) {
            maxTemp = Number(Math.max(currentTemp, maxTemp));
            minTemp = Number(Math.min(currentTemp, minTemp));
        }
    }

    return maxTemp - minTemp;
}

console.log(calculateTempAmplitude(temperatures, temperatures1));
/**
 * Given array of forecasted tempatures, thermometer displays a string with the given temperatures.
 * eg. [17,21, 23] will print " .... 17° C in 1 day, 21° C in 2 days, 23° C in 3 days"
 * Create a function printForecast which takes in an array and logs a string like the above to the console.
 * 
 * TESTDATA = [17,21, 23]
 * TESTDATA2 = [12,5,-5, 0, 4]
 */

const arr = [17, 21, 23];

function printForecast(arr) {

    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}° C in ${i + 1} days... `;
    }
    console.log('... ' + str);

}

printForecast(arr);
























