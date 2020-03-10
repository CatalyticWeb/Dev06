
console.log("Waiting for user input");

var form = document.getElementById("myForm");
function handleForm(event) {
  event.preventDefault();
  } 
form.addEventListener('submit', handleForm);

var el = document.getElementById("submit");
el.addEventListener("click", inOutFunction);

function inOutFunction() {
  var userName = document.getElementById("name").value;
  console.log("got User input");

  document.getElementById("userGreeting").innerHTML = "Hello, "+userName+"!";
  console.log("printed user greeting");

  var oneDay = 1000 * 60 * 60 * 24;

  var presentDate = new Date();
  var christmasDay = new Date(presentDate.getFullYear(), 11, 25);

  if (presentDate.getMonth() == 11 && presentDate.getdate() > 25){
    christmasDay.setFullYear(christmasDay.getFullYear() + 1);
  }

  var result = Math.round(christmasDay.getTime() - presentDate.getTime()) / (oneDay);
  var daysToChristmas = result.toFixed(0);

  console.log("Calculated Days till Christmas");

  document.getElementById("daysTillChristmas").innerHTML = "There are "+daysToChristmas+" days till Christmas.";
  console.log("printed days till chrsitmas");

  var nameLen = userName.length;

  document.getElementById("nameLength").innerHTML = "Your name is "+nameLen+" letters long.";
  console.log("printed length of name.");

  var randomNames = ["Jeff", "Mike", "Tom", "Marshall", "Paul"]

  var randNum = Math.floor(Math.random() * 10);

  var randomUserName = randomNames[randNum];

  document.getElementById("randomName").innerHTML = "Your new random name is "+randomUserName+".";
  console.log("printed random new name.");

  
}
