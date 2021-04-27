import data from './data.js'

var dataPositionsToInclude = [];
var checkIfDup; 

while(dataPositionsToInclude.length<10){
  checkIfDup = Math.floor(Math.random() * data.length)
  if(! dataPositionsToInclude.includes(checkIfDup)){
    dataPositionsToInclude.push(checkIfDup)
  }
}

var select10Codes = [];

for(var i = 0; i<10; i++){
    select10Codes.push(data[dataPositionsToInclude[i]])
}

export default select10Codes
