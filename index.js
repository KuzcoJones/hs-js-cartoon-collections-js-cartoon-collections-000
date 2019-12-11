function dwarfRollCall(dwarves) {
  
  return `1. ${dwarves[0]} 2. ${dwarves[1]} 3. ${dwarves[2]} `
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
  for (let i = 0; i <= foods.length; i++){
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
 