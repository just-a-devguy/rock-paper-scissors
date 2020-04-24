const rock = document.getElementById("rock");
paper = document.getElementById("paper");
scissor = document.getElementById("scissor");
replay = document.getElementById("replay");
scoreValue = document.getElementById("score");
results = document.getElementById("results");
choices = document.getElementById("choices");

options = [rock, paper, scissor];
cpuOptions = ["rock", "paper", "scissor"];

options.forEach((op) => {
  op.addEventListener("click", playGame);
});

replay.addEventListener("click", resetGame);

const gameState = {
  user: "",
  cpu: "",
  score: 0,
};

let { user, cpu, score } = gameState;

function playGame() {
  user = this.id;
  cpu = cpuOptions[Math.floor(Math.random() * options.length)];
  console.log(`user: ${user}, cpu: ${cpu}`);
  resultPage();

  if (user === "rock" && cpu === "paper") {
    console.log(`${cpu} beats ${user}`);
    score--;
  } else if (user === "rock" && cpu === "scissor") {
    console.log(`${user} beats ${cpu}`);
    score++;
  } else if (user === "paper" && cpu === "rock") {
    console.log(`${user} beats ${cpu}`);
    score++;
  } else if (user === "paper" && cpu === "scissor") {
    console.log(`${cpu} beats ${user}`);
    score--;
  } else if (user === "scissor" && cpu === "rock") {
    console.log(`${cpu} beats ${user}`);
    score--;
  } else if (user === "scissor" && cpu === "paper") {
    console.log(`${user} beats ${cpu}`);
    score++;
  } else {
    console.log("Tie");
  }

  scoreValue.innerHTML = score;
}

function resultPage() {
  choices.style.display = "none";
  results.style.display = "block";

  const newDiv = document.createElement("button");
  newDiv.id = cpu;
  const newCont = document.createTextNode(cpu);

  // console.log(newDiv);
  newDiv.appendChild(newCont);

  document.body.insertBefore(newDiv, results);
}

function resetGame() {
  user = "";
  cpu = "";
  scoreValue.innerHTML = score;
  console.log(`user: ${user} cpu: ${cpu} score: ${score}`);

  choices.style.display = "block";
  results.style.display = "none";
  document.body.removeChild(newDiv);
}
