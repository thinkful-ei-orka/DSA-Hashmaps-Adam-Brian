const HashMap = require('./hashmap');
const CustomHashMap = require('./customHash');
const chainingHash = require('./chainingHash');

//  3. Demonstrate understanding of Hash maps
//  3.1  22,10,88,[],4,15,17,28,59,31,[]
//  3.2  [],28->19->10,20,12,[],5,15->33,[],17

const WhatDoesThisDo = function () {

  // It sees str1 and str2 as the same. Once they are not it outputs
  // properly.
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log('str 1', map1.get(str1));
  console.log('str 3', map2.get(str3));
};

function main() {

  let lotr = new HashMap;
  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandalf');
  lotr.set('Human', 'Aragorn');
  lotr.set('Elf', 'Legolas');
  lotr.set('Maiar', 'The Necromancer');
  lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');
  console.log(lotr);
  // console.log(HashMap._capacity);

}

main();
////4
const removeDuplicates = (string) => Array.from(new Set(string.split(''))).join('');

// console.log(removeDuplicates('the quick brown fox jumps over the lazy dog'));

////5
const palindromePlus = (string) => {
  const nonrepeats = string.split('').sort().join('').replace(/(\w)\1/gi, '');
  return nonrepeats.length === 0 || nonrepeats.length === 1 ? true : false;
};

// console.log(palindromePlus('acecarr'));
// console.log(palindromePlus('racecar'));
// console.log(palindromePlus('north'));

////6
function anagramGrouping(array) {
  const anagramGroups = new CustomHashMap;
  array.forEach(word => anagramGroups.set(word, word));

  return anagramGroups._hashTable.filter(cell => cell === undefined ? false : true).map(cell => cell.map(object => object.value));
}

//console.log(anagramGrouping(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));

////7
function main7() {

  let lotr = new chainingHash;
  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandalf');
  lotr.set('Human', 'Aragorn');
  lotr.set('Elf', 'Legolas');
  lotr.set('Maiar', 'The Necromancer');
  lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');
  console.log(lotr);

}
// main7()
