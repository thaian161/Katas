const DRAWS = "Draw!";
const PLAYER_1 = "Player 1 won!";
const PLAYER_2 = "Player 2 won!";
const R = "rock";
const S = "scissors";
const P = "paper"
type RSP = "rock" |  "paper" |"scissors";;


export function rps(p1: RSP, p2: RSP): string {
  if (p1 === p2){
    return DRAWS
  }
  else if ((p1 === R && p2 === S) || (p1 === S && p2 === P) || (p1 === P && p2 === R)) {
     return PLAYER_1
  }
   else { //(p1 === S && p2 === R) || (p1 === P && p2 === S) || (p1 === R && p2 === P)
     return PLAYER_2
   }  
}


// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/typescript

  
  
