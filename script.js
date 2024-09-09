console.log(333);
console.log("dd");
console.log(5 + 3);
console.log(5 * 3);

const a = 5; //상수 변하지 않느느 값 변수 만드는 법 공백이 필요하면 대문자.

//대부분 const가 기본. 업데이트할 소수의 것만 let
//null 아무것도 없는 것으로 채워진 것. undefined 메모리에 존재는 하는데 정해지지 않았음. null은 자연적으로 생기지 않음.
const non = [1, 2, 3, 4, "no", null];
console.log(non);
const apiKey = "0cb7bf6dd6a2cd3aa583cb6e16fd0525";

function runOk(data) {
  console.log(data);
  const we = data.coords.latitude;
  const gyo = data.coords.longitude;
  console.log(we, gyo);
  const url = `https://api.openweathermap.org/data/2.5/weather?{we}=we&lon={gyo}&appid={apiKey}`;
  console.log(url);
}
function runError() {
  alert("오류 발생, 위치 확인 불가");
}

navigator.geolocation.getCurrentPosition(runOk, runError);
