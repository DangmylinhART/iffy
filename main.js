// Your code here!
const colorCombinator = require('./color-combinator.js')
const colorDeconstructor = require('./color-deconstructor.js')

// get Input
const userInput = getInput(0) + getInput(1)

const color1 = getInput(0);
const color2= getInput(1);

// make function if  
//******** method 1
if(color1 === undefined) { 
  console.log ("type a color")
 } else if(color2 === undefined){
    console.log(colorDeconstructor(color1))
 } else { console.log(colorCombinator(color1,color2))
}

//******* method 2
// if(color1 === undefined){
//   console.log ('type a color')
// }
// if( color1 !== undefined && color2 === undefined){
//   console.log(colorCombinator(color1,color2))
// }
// if( color1 !== undefined && color2 !== undefined){
//   console.log(colorCombinator(color1,color2))
// }

// Our helper function here! Don't  touch!
function getInput(i) {
  return process.argv[i + 2];
}
