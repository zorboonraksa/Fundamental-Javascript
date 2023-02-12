let times = prompt("อยากทายกี่ครั้ง(หัว/ก้อย) : ")
alert("จัดไป")
var result;
for(let i = 1; i <= times; i++){
    let predict = prompt("ทายมา : ")
    document.getElementById("predict-list").innerHTML +=
    "ครั้งที่ " + i + " : ทาย " + predict + "<br>"
    let answer = Math.floor(Math.random() * 2)
    if(answer == 0){
        result = "หัว"
    }
    else{
        result = "ก้อย"
    }
    document.getElementById("ans").innerHTML +=
    "ครั้งที่ " + i + " : ผลลัพธ์ " + result + "<br>"
    if(result == predict){
        document.getElementById("result").innerHTML +=
        "ครั้งที่ " + i + " : ทาย ถูก!!" + "<br>"
    }
    else{
        document.getElementById("result").innerHTML +=
        "ครั้งที่ " + i + " : ทาย ผิด!!" + "<br>"
    }
}