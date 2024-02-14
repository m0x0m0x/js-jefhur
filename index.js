// Import stylesheets
import './style.css';
import { sqrt } from 'mathjs';

// Write Javascript code!
const appDiv = document.getElementById('app');
//////////////////////////////////////////////

let firstName = 'Burgers';
let piVal = Math.PI;

let mathsSqrt = sqrt(2.345);

// Code here all shows up in browser or console
appDiv.innerHTML = `
${firstName} <br> 
<p> Pi value is :  ${piVal} </p>
<p> Math JS Library square root function sqrt result is ${mathsSqrt}</P>
`;

// Console rape
console.log(`
Console Rape Here
==================

`);
console.log('Math Operation');
console.log(`Raising Power ${20 ** 12}`);
console.log(sqrt(23));

// Console Assigments

//Declare variables called country, continent and population and assign their values according to your own country (population in millions).

// Assignment 1
console.log(`
===============
Assignment 1
================
`);
let myCountry = 'BootyLand';
let myContinent = 'BootySia';
let myPopulation = '10,000';
console.log(`
My Country is ${myCountry} , cotinent is ${myContinent} and population is ${myPopulation}
`);
console.log(typeof myContinent);
console.log(typeof myCountry);
console.log(typeof myPopulation);
