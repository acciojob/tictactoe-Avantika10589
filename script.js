//your JS code here. If required.
const submitBtn = document.getElementById("submit");
const board = document.querySelector(".board");
const messageDiv = document.querySelector(".message");
const cells = document.querySelectorAll(".cell");

let player1, player2;
let currentPlayer;
let currentSymbol;
let gameActive = false;


const winCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];


submitBtn.addEventListener("click", () => {
  player1 = document.getElementById("player-1").value || "Player 1";
  player2 = document.getElementById("player-2").value || "Player 2";
  currentPlayer = player1;
  currentSymbol = "X";
  gameActive = true;

  document.getElementById("player-form").style.display = "none";
  board.style.display = "block";
  messageDiv.textContent = `${currentPlayer}, you're up`;
});


cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (!gameActive || cell.textContent !== "") return;

    cell.textContent = currentSymbol;

 
    if (checkWinner()) {
      messageDiv.textContent = `${currentPlayer}, congratulations you won!`;
      gameActive = false;
      return;
    }


    if (currentPlayer === player1) {
      currentPlayer = player2;
      currentSymbol = "O";
    } else {
      currentPlayer = player1;
      currentSymbol = "X";
    }

    messageDiv.textContent = `${currentPlayer}, you're up`;
  });
});


function checkWinner() {
  for (let combo of winCombos) {
    const [a, b, c] = combo;
    const cellA = document.getElementById(a).textContent;
    const cellB = document.getElementById(b).textContent;
    const cellC = document.getElementById(c).textContent;

    if (cellA && cellA === cellB && cellA === cellC) {
      // highlight winner
      document.getElementById(a).classList.add("winner");
      document.getElementById(b).classList.add("winner");
      document.getElementById(c).classList.add("winner");
      return true;
    }
  }
  return false;
}

