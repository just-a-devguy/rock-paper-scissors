const rock = document.getElementById("rock");
paper = document.getElementById("paper");
scissor = document.getElementById("scissor");
options = [rock, paper, scissor];
cpuOptions = ["rock", "paper", "scissor"];

options.forEach((op) => {
  op.addEventListener("click", genId);
});

const picks = {
  user: "black",
  cpu: "",
};

// let userPick = "";

// let cpuPick = "";

// console.log(options.length);
let { user, cpu } = picks;

function genId() {
  user = this.id;
  cpu = cpuOptions[Math.floor(Math.random() * options.length)];
  console.log(`user: ${user}, cpu: ${cpu}`);

  if (user === "rock" && cpu === "paper") {
    console.log(`${cpu} beats ${user}`);
  } else if (user === "rock" && cpu === "scissor") {
    console.log(`${user} beats ${cpu}`);
  } else if (user === "paper" && cpu === "rock") {
    console.log(`${user} beats ${cpu}`);
  } else if (user === "paper" && cpu === "scissor") {
    console.log(`${cpu} beats ${user}`);
  } else if (user === "scissor" && cpu === "rock") {
    console.log(`${cpu} beats ${user}`);
  } else if (user === "scissor" && cpu === "paper") {
    console.log(`${user} beats ${cpu}`);
  } else {
    console.log("Tie");
  }
}

// console.log(genId);
