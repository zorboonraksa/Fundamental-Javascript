var Name = "Zor";
var firstName = "Boonraksa";
var lastName = "Buaraksa";
for (let i = 0; i < 3; i++) {
  console.log(i + 1 + ". Hello " + Name + " : " + firstName + " " + lastName);
}
let number = prompt("choose a number(000-999) : ")
document.getElementById("chose").innerHTML = number;
var result = Math.floor(Math.random() * 1000)
document.getElementById("result").innerHTML = result;
if(number === result){
    document.getElementById("noti").innerHTML = "Lucky!!!";
} else {
    document.getElementById("noti").innerHTML = "Try another time!!!";
}
