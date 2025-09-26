let currentPlayer = "x";
let player1 = "";
let player2 = "";
let gameActive = false;

document.getElementById("submit").addEventListener("click", () => {
  player1 = document.getElementById("player1").value.trim() || "Player1";
  player2 = document.getElementById("player2").value.trim() || "Player2";
  currentPlayer = "x";
  gameActive = true;
  document.querySelector(".message").textContent = `${player1}, you're up`;
});

const board = document.querySelectorAll(".board button");

board.forEach(cell => {
  cell.addEventListener("click", () => {
    if (!gameActive || cell.textContent !== "") return;

    cell.textContent = currentPlayer;

    if (checkWinner()) {
      const winnerName = currentPlayer === "x" ? player1 : player2;
      document.querySelector(".message").textContent = `${winnerName} congratulations you won!`;
      gameActive = false;
      return;
    }

    // switch player
    currentPlayer = currentPlayer === "x" ? "o" : "x";
    const nextName = currentPlayer === "x" ? player1 : player2;
    document.querySelector(".message").textContent = `${nextName}, you're up`;
  });
});

function checkWinner() {
  const wins = [
    [1,2,3],[4,5,6],[7,8,9],
    [1,4,7],[2,5,8],[3,6,9],
    [1,5,9],[3,5,7]
  ];
  return wins.some(pattern => {
    const [a,b,c] = pattern;
    return (
      document.getElementById(a).textContent === currentPlayer &&
      document.getElementById(b).textContent === currentPlayer &&
      document.getElementById(c).textContent === currentPlayer
    );
  });
}
