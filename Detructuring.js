// Detructuring

// const mevalar = ["olma", "gilos", "uzum", "nok"];

// const olma = mevalar[0];
// const gilos = mevalar[1];
// const uzum = mevalar[2];
// const nok = mevalar[3];

// const [olma, gilos, uzum, nok] = ["olma🍎", "gilos🍒", "uzum🍇", "nok🍐"];
// const [olma, gilos, ...boshqaMevalar] = ["olma🍎", "gilos🍒", "uzum🍇", "nok🍐"];
// rest operatori => '...o'zgaruvchi' Detructuring da qolgan ma'lumotni birlashtirib beradi
// console.log(olma, gilos, boshqaMevalar);

// const {name: ism, age, job, from = 'Uzbekistan'} = {
//     name: 'Sardorbek',
//     age: 15,
//     job: 'Programmer'
// }
// {name, age, job} => bular o'zgaruvchi hisoblanadi
// console.log(ism, age, job, from);

// let name = personObj.name;
// let age = personObj.age;
// let job = personObj.job;

// Topshiriq:)

const firstGamerScore = document.querySelector("#first_gamer_score");
const secondGamerScore = document.querySelector("#second_gamer_score");
const firstGamerBtn = document.querySelector("#first_gamer_btn");
const secondGamerBtn = document.querySelector("#second_gamer_btn");
const scoreClear = document.querySelector("#score_clear");
const select = document.querySelector("select");

firstGamerScore.innerHTML = 0;
secondGamerScore.innerHTML = 0;

firstGamerBtn.addEventListener("click", () => {
  if (firstGamerScore.innerHTML < select.value) {
    firstGamerScore.innerHTML++;
    if (firstGamerScore.innerHTML == select.value) {
      firstGamerScore.style.color = "rgb(14, 250, 140)";
      secondGamerScore.style.color = "red";
      secondGamerBtn.disabled = "true";
    }
  }
});
secondGamerBtn.addEventListener("click", () => {
  if (secondGamerScore.innerHTML < select.value) {
    secondGamerScore.innerHTML++;
    if (secondGamerScore.innerHTML == select.value) {
      secondGamerScore.style.color = "rgb(14, 250, 140)";
      firstGamerScore.style.color = "red";
      firstGamerBtn.disabled = "true";
    }
  }
});

scoreClear.addEventListener("click", () => {
  firstGamerScore.innerHTML = 0;
  secondGamerScore.innerHTML = 0;
  firstGamerScore.style.color = "black";
  secondGamerScore.style.color = "black";
});
