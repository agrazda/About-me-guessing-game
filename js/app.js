'use strict';

let userName = prompt('Please enter your name');
document.write("Hello, " + userName + ". Welcome!");

//console.log(userName);

let knowMeOrig = prompt('Do you think you know me?');
console.log(knowMeOrig);

let knowMe = knowMeOrig.toLowerCase();

//console.log(knowMe);

if (knowMe === 'yes' || knowMe === 'y') {
  alert('Well then! Let us find out!');
} else if (knowMe === 'no' || knowMe === 'n') {
  alert('That is too bad! Take a crack at it!');
} else {
  alert('I didn\'t get that, but you will know me soon enough!');
}

let locOrig = prompt('Do I live in Washington?');
console.log(locOrig);

let loc = locOrig.toLowerCase();

//console.log(loc);

if (loc === 'yes' || loc === 'y') {
  alert('I did for most my life. I live in Oregon now');
} else if (loc === 'no' || loc === 'n') {
  alert('Your right! I live in Oregon!');
} else {
  alert('I didn\'t get that, but I live in Oregon!');
}

let catOrig = prompt('Do I have any pets?');
//console.log(catOrig);

let cat = catOrig.toLowerCase();

//console.log(cat);

if (cat === 'yes' || cat === 'y') {
  alert('I sure do. 3 cats! #\catdad');
} else if (cat === 'no' || cat === 'n') {
  alert('Oh so close! I have 3 cats! #\lintrollerseverywhere');
} else {
  alert('I didn\'t get that, but I 3 cats!');
}

let kidOrig = prompt('Do I have any kids?');
//console.log(kidOrig);

let kid = kidOrig.toLowerCase();

//console.log(kid);

if (kid === 'yes' || kid === 'y') {
  alert('You Betcha! I got 1 kiddo, and one on the way!');
} else if (kid === 'no' || kid === 'n') {
  alert('I do...for the next 18 years and 6 months.');
} else {
  alert('I didn\'t get that, but I have a 10 month old son!');
}

let marryOrig = prompt('Am I married?');
//console.log(marryOrig);

let marry = marryOrig.toLowerCase();

//console.log(marry);

if (marry === 'yes' || marry === 'y') {
  alert('To the best wife anyone could dream of!');
} else if (marry === 'no' || marry === 'n') {
  alert('Of course I\'m married! I couldn\'t let her go!');
} else {
  alert('I didn\'t get that, but I\'m happily married since 2019!');
}

let nowOrig = prompt('Now ' + userName + ', do you feel like you know me better?');
//console.log(nowOrig);

let now = nowOrig.toLowerCase();

//console.log(now);

if (now === 'yes' || now === 'y') {
  alert('Good, Mission Complete!');
} else if (now === 'no' || now === 'n') {
  alert('Thats too bad! Maybe next time.');
} else {
  alert('I didn\'t get that, but there is no way you didnt learn something about me!');
}