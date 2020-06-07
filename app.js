const rock = document.getElementById("rock"),
  paper = document.getElementById("paper"),
  scissor = document.getElementById("scissor"),
  replay = document.getElementById("replay"),
  scoreValue = document.getElementById("score"),
  results = document.querySelector(".results-display"),
  choices = document.querySelector(".user-choices"),
  userRes = document.getElementById("user"),
  cpuRes = document.getElementById("cpu"),
  decision_mssg = document.getElementById("decision-mssg"),
  resultMssg = document.getElementById("mssg"),
  options = [rock, paper, scissor],
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
  resultPage();

  if (user === "rock" && cpu === "paper") {
    score--;
    resultMssg.innerHTML = "Lose";
  } else if (user === "paper" && cpu === "scissor") {
    score--;
    resultMssg.innerHTML = "Lose";
  } else if (user === "scissor" && cpu === "rock") {
    score--;
    resultMssg.innerHTML = "Lose";
  } else if (user === "rock" && cpu === "scissor") {
    score++;
    resultMssg.innerHTML = "Win";
  } else if (user === "paper" && cpu === "rock") {
    score++;
    resultMssg.innerHTML = "Win";
  } else if (user === "scissor" && cpu === "paper") {
    score++;
    resultMssg.innerHTML = "Win";
  } else {
    resultMssg.innerHTML = "Tied";
  }

  scoreValue.innerHTML = score;
}

function resultPage() {
  choices.style.display = "none";
  results.style.display = "block";

  userRes.classList.add(user);

  setTimeout(() => {
    cpuRes.classList.add(cpu);
  }, 1000);

  setTimeout(() => {
    decision_mssg.style.display = "flex";
  }, 1500);
}

function resetGame() {
  user = "";
  cpu = "";
  scoreValue.innerHTML = score;

  cpuRes.className = "choice-item";
  userRes.className = "choice-item";

  choices.style.display = "block";
  results.style.display = "none";
}
