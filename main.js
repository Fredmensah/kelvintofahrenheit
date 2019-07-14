/*
* @Author: DevKobby
* @Date:   2019-07-14 05:30:42
* @Last Modified by:   DevKobby
* @Last Modified time: 2019-07-14 05:31:21
*/

//Collect kelvin value from user using a prompt...
let kelvin = prompt('Buddy what is your temperature today');

//Convert kelvin value to celcius...
let celcius = kelvin - 273.15;

//(0°C × 9/5) + 32 = 32°F ...Formula for c to f
//convert celcius value to fahrenheit...
let fahrenheit = Number.parseFloat((celcius * (9/5)) + 32).toFixed(2);

//Throw an alert to show final answer
alert(`${fahrenheit}F`);