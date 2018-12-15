//let dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]

function dwarfRollCall(dwarves) {
let dwarfList = []
for (let i = 0; i < dwarves.length; i++){
  dwarfList.push([i+1]+ '. '+ dwarves[i])
}
return dwarfList.join(' ') + " "
}

//let planeteerCalls = ["earth", "wind", "fire", "water", "heart"]

function summonCaptainPlanet(planeteerCalls){
let planet = [];
let i = 0;
while (i < planeteerCalls.length){
  planet.push(planeteerCalls[i].toUpperCase() + '!');
  i++;
}
return planet
}

//let words = ["hello", "bye", "sky", "birdy"]
function longPlaneteerCalls(words) {
  var word = false
  for (let i = 0; i < words.length; i++){
  if (words[i].length > 4){
  return word = true
}
return word
}
}

//let foods = ["tomato soup", "oyster crackers", "gouda"]
function findTheCheese (foods) {
  let basket = ['cheddar', 'gouda', 'camembert']
  for (let i = 0; i < basket.length; i++){
  var cheese1 = foods.includes(basket[i])
if (cheese1 === true){
    return basket[i]
  }
}
  return 'no cheese!'
  }
