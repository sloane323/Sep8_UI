//id가 clock인 문서 객체를 들고옴

const clock = document.querySelector("#clock");

// 현재 시간을 가져 오는 객체
function getClock (){

// 00:00:00 포맷을 맞추기 위해 String 의 PadStar메소드 사용
// 숫자형을 문자형으로 바꿀때 앞으로 숫자로 연산할 일이 있는지 생각하고 바꾸는게 좋다. 

const date = new Date();
const hour =  String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");
const seconds = String(date.getSeconds()).padStart(2, "0");


// 가져온 객체에 넣어줌 

return `${hour} : ${minutes} :  ${seconds} ` ;   }


// 함수를 통해 시간 문자열을 할당 
clock.innerHTML= getClock();
// 인터벌 함수를 사용하여 1초마다 반복 
setInterval(()=>{clock.innerHTML=getClock();},1000);