var Name = "Zor";
var firstName = "Boonraksa";
var lastName = "Buaraksa";
for (let i = 0; i < 3; i++) {
  console.log(i + 1 + ". Hello " + Name + " : " + firstName + " " + lastName);
}
var result = Math.floor(Math.random() * 1000)
console.log(result)
document.getElementById("result").innerHTML = result;
var amount = prompt("choose amount of numbers to choose: ")
const numbers = []
for(let i = 0 ; i < amount; i++){
    numbers[i] = prompt((i+1)+".choose a number(000-999) : ")
}
document.getElementById("chose").innerHTML = numbers;
var check = false
for(let i = 0 ; i < amount; i++){
    if(numbers[i] == result){
        check = true
    }
}
if(check === true){
    document.getElementById("noti").innerHTML = "Lucky!!!";
} else {
    document.getElementById("noti").innerHTML = "Try another time!!!";
}
