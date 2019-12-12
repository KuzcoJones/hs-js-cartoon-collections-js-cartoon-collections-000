function dwarfRollCall(dwarves) {
  let arr = [];
  for ( let i = 0; i < dwarves.length/2 ; i++){
    arr.push(`${i+1}. ${dwarves[i]} `);
    // i + 1 because i = 0; 
  }
  
  return arr.join('');
  //method join covert array's element into //string
  //The seperators are accepted in the //parathesis. ('').
  
}

function wordsWithB(words){
  bWords = [];
  for( let i = 0; i < words.length; i++){
    if (words[i] == ){
      
    }
  }
  if (words[0])
  return words;
}
function summonCaptainPlanet(planeteerCalls){
 for ( let i = 0; i <= 2 ; i++) {
   planeteerCalls[i] = planeteerCalls[i].toUpperCase() + '!';
 }
return planeteerCalls;
}

function longPlaneteerCalls(words) {
  //loop through each element to check length
  for(let i = 0; i <= 3; i++ ){
    if (words[i].length === 4){
      return false;
    }
    else {
      return true;
    }
  }
}


function findTheCheese (foods) {
 let cheese = ['cheddar', 'gouda', 'camambert'];
  for (let i = 0; i <= foods.length; i++){ console.log(foods)
    if ( foods[i] !== cheese[i]) {
      foods.shift();
    }
  if (foods[i] == cheese[i]){
    return foods[0];
  }
  else {
    return 'no cheese!';
  } 
  }
}


















/*  {
    {
      let cheese = foods.shift();
      
    }
    
  } */
 