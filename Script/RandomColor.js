
function corAleatoria(){


function aleatorio(inferior,superior){ 
   numPossibilidades = superior - inferior 
   aleat = Math.random() * numPossibilidades 
   aleat = Math.floor(aleat) 
   return parseInt(inferior) + aleat 
  } 
  hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F") 
   cor_aleatoria = "#"; 
   for (i=0;i<6;i++){ 
      posarray = aleatorio(0,hexadecimal.length) 
      cor_aleatoria += hexadecimal[posarray] 
   } 
   return cor_aleatoria 
}
console.log(corAleatoria());