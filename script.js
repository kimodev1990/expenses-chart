const info = `[
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]`;
const infoExpenses = JSON.parse(info);

/*
Testing
console.log(infoExpenses[1].amount);
*/

const mondayExp = document.getElementById("monday");
const tuesdayExp = document.getElementById("tuesday");
const wednesdayExp = document.getElementById("wednesday");
const thursdayExp = document.getElementById("thursday");
const fridayExp = document.getElementById("friday");
const saturdayExp = document.getElementById("saturday");
const sundayExp = document.getElementById("sunday");

const displayExpense = document.querySelectorAll(".display-expense");

mondayExp.innerHTML = "$" + infoExpenses[0].amount;
tuesdayExp.innerHTML = "$" + infoExpenses[1].amount;
wednesdayExp.innerHTML = "$" + infoExpenses[2].amount;
thursdayExp.innerHTML = "$" + infoExpenses[3].amount;
fridayExp.innerHTML = "$" + infoExpenses[4].amount;
saturdayExp.innerHTML = "$" + infoExpenses[5].amount;
sundayExp.innerHTML = "$" + infoExpenses[6].amount;

function displayExp() {
  for (let i = 0; i < displayExpense.length; i++) {
    if (displayExpense[i].classList.contains("invisible") === true) {
      displayExpense[i].classList.remove("invisible");
    }
  }
}

function undisplayExp() {
  for (let i = 0; i < displayExpense.length; i++) {
    if (displayExpense[i].classList.contains("invisible") === false) {
      displayExpense[i].classList.add("invisible");
    }
  }
}
