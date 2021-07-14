'use strict';

console.log('hello world!');

let knowMeOrig = prompt('Do you think you know me?');
console.log(knowMeOrig);

let knowMe = knowMeOrig.toLowerCase();

console.log(knowMe);

if (knowMe === 'yes' || knowMe === 'y') {
  alert('Well then! Let us find out!');
} else if (knowMe === 'no' || knowMe === 'n') {
  alert('That is too bad! Take a crack at it!');
} else {
  alert('I didn\'t get that, but you will know me soon enough!');
}