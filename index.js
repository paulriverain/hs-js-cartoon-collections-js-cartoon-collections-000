//let dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]
function dwarfRollCall(dwarves) {
let dwarfList = []
let count = 0
for (let i = 0; i<dwarves.length; i++){
  count+=1
  dwarfList.push(/*[1+i]*/count+'. '+dwarves[i])
}
return dwarfList.join(' ')+' '
}


//let planeteerCalls = ["earth", "wind", "fire", "water", "heart"]
function summonCaptainPlanet(planeteerCalls){
let calls = []
let i = 0;
while(i<planeteerCalls.length){
  calls.push(planeteerCalls[i].toUpperCase()+'!')
  i++;
}
return calls
}

//let words = ["hello", "bye", "sky", "birdy"]
function longPlaneteerCalls(words) {
let word = false
for (let i=0; i<words.length; i++){
  if (words[i].length > 4){
    return word = true
  }
}
return word
}

//let foods = ['bread','milk', 'eggs', 'camembert', 'butter']
function findTheCheese(foods){
let cheese = ['cheddar', 'gouda', 'camembert']
for (let i=0; i<cheese.length; i++){
var isCheese = foods.includes(cheese[i])
if (isCheese === true){
  return cheese[i]
}
}
return 'no cheese!'
}

//let foods = ['bread','milk', 'eggs', 'camembert', 'butter']
/*function findTheCheese(foods){
let cheese = ['cheddar', 'gouda', 'camembert']
for (let i=0; i<cheese.length; i++){
  for (let j=0; j<foods.length; j++){
    if (cheese[i] === foods[j]){
      return cheese[i]
    }
  }
}
return 'no cheese!'
}*/
