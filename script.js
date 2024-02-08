//Rock Button
document.getElementById("Rock").addEventListener("click", RockStuff);
function RockStuff() {
  document.getElementById("RealPlayer").src = "images/rock.png";
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Paper Button
document.getElementById("Paper").addEventListener("click", PaperStuff);
function PaperStuff() {
  document.getElementById("RealPlayer").src = "images/paper.png";
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Scissors Button
document.getElementById("Scissors").addEventListener("click", ScissorsStuff);
function ScissorsStuff() {
  document.getElementById("RealPlayer").src = "images/scissors.png";
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Computer Pick (Rock,Paper,Scissors)
//Rock
document.getElementById("Rock").addEventListener("click", RandomRPS1);
function RandomRPS1() {
  let RandRockNum = Math.floor(Math.random() * 3 + 1);
  let WhoWins = RandRockNum;
  let playerWin = 0;
  playerWin = playerWin + 1;
  let ComputerWin = 0;
  ComputerWin = ComputerWin + 1;
  if (RandRockNum == 1) {
    document.getElementById("ComputerPick").src = "images/rock.png";
  } else if (RandRockNum == 2) {
    document.getElementById("ComputerPick").src = "images/paper.png";
  } else {
    document.getElementById("ComputerPick").src = "images/scissors.png";
  }
  if (WhoWins == 1) {
    document.getElementById("outcome").innerHTML = "Tie";
  }
  if (WhoWins == 2) {
    document.getElementById("outcome").innerHTML = "Computer Wins";
    document.getElementById("ComputerScore").innerHTML = ComputerWin;
  } else if (WhoWins == 3) {
    document.getElementById("PlayerScore").innerHTML = playerWin;
    document.getElementById("outcome").innerHTML = "Player Wins";
  }
  console.log(RandRockNum);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Paper
document.getElementById("Paper").addEventListener("click", RandomRPS2);
function RandomRPS2() {
  let RandRockNum2 = Math.floor(Math.random() * 3 + 1);
  let WhoWins2 = RandRockNum2;
  let playerWin2 = 0;
  playerWin2 = playerWin2 + 1;
  let ComputerWin2 = 0;
  ComputerWin2 = ComputerWin2 + 1;
  if (RandRockNum2 == 1) {
    document.getElementById("ComputerPick").src = "images/rock.png";
  } else if (RandRockNum2 == 2) {
    document.getElementById("ComputerPick").src = "images/paper.png";
  } else {
    document.getElementById("ComputerPick").src = "images/scissors.png";
  }
  if (WhoWins2 == 2) {
    document.getElementById("outcome").innerHTML = "Tie";
  }
  if (WhoWins2 == 1) {
    document.getElementById("outcome").innerHTML = "Player Wins";
    document.getElementById("PlayerScore").innerHTML = playerWin2;
  } else if (WhoWins2 == 3) {
    document.getElementById("outcome").innerHTML = "Computer Wins";
    document.getElementById("ComputerScore").innerHTML = ComputerWin2;
  }
  console.log(RandRockNum2);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Scissors
document.getElementById("Scissors").addEventListener("click", RandomRPS3);
function RandomRPS3() {
  let RandRockNum3 = Math.floor(Math.random() * 3 + 1);
  let WhoWins3 = RandRockNum3;
  let playerWin3 = 0;
  playerWin3 = playerWin3 + 1;
  let ComputerWin3 = 0;
  ComputerWin3 = ComputerWin3 + 1;
  if (RandRockNum3 == 1) {
    document.getElementById("ComputerPick").src = "images/rock.png";
  } else if (RandRockNum3 == 2) {
    document.getElementById("ComputerPick").src = "images/paper.png";
  } else {
    document.getElementById("ComputerPick").src = "images/scissors.png";
  }
  if (WhoWins3 == 3) {
    document.getElementById("outcome").innerHTML = "Tie";
  }
  if (WhoWins3 == 1) {
    document.getElementById("outcome").innerHTML = "Computer Wins";
    document.getElementById("ComputerScore").innerHTML = ComputerWin3;
  } else if (WhoWins3 == 2) {
    document.getElementById("outcome").innerHTML = "Player Wins";
    document.getElementById("PlayerScore").innerHTML = playerWin3;
  }
  console.log(RandRockNum3);
}
