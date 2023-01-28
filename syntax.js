console.log(num);
var num = 10;
var num = 20;
console.log(num);

// 블록 레벤 스코프가 지원안됨. let 으로 변경해야 함.
for (var num = 0; num < 10; num++) {}

console.log(num);

{
  // 여기도 블록레벨 스코프가 지원되지 않아 30이 됨
  var num = 30;
}

console.log(num);

// ReferenceError: Cannot access 'str' before initialization 발생
// 아래 주석 풀면, 위에 에러가 나옴.
//console.log(str); // 호이스팅은 발생하지만 TDZ(Temporary Dead Zone) 때문에 오류 발생
//let str = "문자열";

/*
화살표 함수
- 함수를 간결하게 표현
- return 생략
- 함수 호이스팅이 일어나지 않는다.
*/
// 아래 한줄 주석을 풀고 실행하면 위에 str 변수와 동일한 형태 에러 발생
//sum();
// const sum = (a, b) => {
//   return a + b;
// };

// 위에를 간략히 하면, 아래와 같음.
const sum = (a, b) => a + b;

// 객체를 의미하는 {} 와 코드블록을 의미하는 {} 가 같다보니, 화살표 오른쪽에 () 를 생략하면 에러가 발생.
// 객체를 리턴할 때는 반드시 소괄호()로 감싸야 함.
const getObj = (name, age) => ({ name: name, age: age });

/*
    매개변수 rest
    - 매개변수가 몇개일지 정해지지 않았을 때 사용.
    - 매개변수 앞에 ... 을 붙이면 인자가 몇개든 배열로 모아준다.    
    - 매개변수의 마지막에 위치해야 한다.
*/
function getTotal(...numbers) {
  console.log(numbers);
  //acc에 누산이 된다. , 0 은 초기값. Array.prototype.reduce : 누산함수.
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

getTotal(2, 4, 10, 15);

/*
스프레드 (펼침) 연산자
- 배열이나 객체를 펼치는 효과
*/
let arr = [1, 2, 3, 4, 5];
console.log(getTotal(...arr));
let newArr = [0, ...arr, 10];

let user = {
  name: "seok",
  age: 31,
};

let copy = user;
copy.age = 40;
console.log(user);
console.log(`하나둘 : ${user}`);

let copy02 = { ...user }; // 참조 복사가 아니라 프러퍼터를 펼쳐서 복사한다.
copy02.age = 50;
console.log(copy02, user);

/* 
비구조화 할당
- 배열이나 객체의 값을 변수명으로 간단하게 할당할 수 있다.
*/
// user의 프로퍼티 값을을 같은 이름의 변수에 담기
// 아래 2줄 코드를 한줄로 하자면,
// let age = user.age;
// let name = user.name
//let { age, name } = user; // 위에걸 개선

let { age: username, name } = user; //age를 찾아서  username 변수에 할당하는것...
console.log(username);

let fruits = ["apple", "orange", "grape"];
let [first, second] = fruits;

console.log(first, second);

//  객체를 배열에 넣으려고 하면 에러가 발생한다.
//let [first1, second2] = user; //TypeError: user is not iterable
//console.log(first1, second2);

/*
삼항 연산자
- 조건식 ? 참일 경우 : 거짓일 경우
*/
//user.age이 40보다 작으면 "red" 그게 아니면, "green"
let result = user.age < 40 ? "red" : "green";
console.log(result);

/* 
단축 평가 
    && (and) : 앞의 값이 true일 때 뒤의 값을 평가
    || (or)  : 앞의 값이 false일 때 뒤의 값을 평가
*/
console.log(user.age);
const color = user.age < 50 && "red";
console.log(color);

function print() {
  console.log("30세 이상입니다.");
}

user.age = 20;
user.age > 30 && print(); // user.age가 30보다 클때만 print()를 평가(=실행) 함.

/*
  null 병합 연산자
  - ?? 를 사용하여, null이나 undefined 때만 동작하도록 하고 싶을때 사용한다.
*/

0 ?? console.log("이건 실행 안됨"); // 이거 실행안됨.  용어 :falsy -> false인것처럼 동작한다.
null ?? console.log("이건 실행됨"); //

/* 
  옵셔널 체이닝 
    - 프로퍼티 참조할 때 참조하는 객체가 undefined, null인 경우 참조하지 않는다.
    - 체이닝 : 조건에 따라 연결하지 않는다라고 생각하면 됨.
*/
let obj = {
  age: 31,
  height: 173,
};
console.log(obj.weight); // undefined 로 나와 문제가 안됨
//console.log(obj.weight.num); // 여기서부터 문제 발생. TypeError: Cannot read properties of undefined (reading 'num')
console.log(obj.weight?.num); // 옵셔널 체이닝...weight가 undefined 라서, 더 이상 num 까지 연결하지 않는다.

/*
템플릿 리터럴
    - 문자열 안에 JS 표현식(값)을 포함시킬 수 있다.
*/
console.log("안녕하세요 " + user.name + " 입니다.");
console.log(`안녕하세요 ${user.name} 입니다.`);

/*
    배열의 고차함수
    - 배열을 순회하면서 각 요소에 대한 함수를 실행한다.
    - 배열의 요소의 갯수만큼 반복하는 함수
*/
let numbers = [11, 22, 33, 44, 55];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// forEach : 배열의 각 요소를 인자로 전달받는 콜백함수를 실행.
//           => 콜백함수의 첫번째 매개변수에 각 요소가 전달.
//           => 콜백함수의 두번째 매개변수에 각 요소의 인덱스 전달.

// 화살표 함수를 하면, 아래...
// numbers.forEach(function (num) {
//   console.log(num);
// });

numbers.forEach((element, idx) => console.log(element, "idx :", idx));

/*
    Array.prototype.filter() : 콜백함수의 return 값이 true인 요소만 모와서, 새로운 배열로 반환
    - return 값이 true 또는 false 여야한다. => 조건식이면 된다.
*/
let evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers);

// 홀수만 모아서 출력 => 화살표 함수 이용하기.
let oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log(oddNumbers);

/*
    Array.prototype.map() : 
    - 각 요소를 이용해서(예를들어, 값을 가공하여) 새로운 배열로 반환
*/
let doubleNumbers = numbers.map(function (num) {
  return num * 2;
});

//console.log(doubleNumbers);

// 문제 : 화살표 함수를 사용하여, 짝수번째만 두배 곱하고, 나머지는 그대로 새로운 배열로 모으기
// 조건에 따라서 값을 바꾸기도 하고, 안바꾸기도 하는 예제
let evenChange = numbers.map((num, idx) => (idx % 2 === 0 ? num * 2 : num));
console.log(evenChange);

// age가 30이상인 객체의 이름값만 배열로 모으기
let userList = [
  { name: "seok", age: 31 },
  { name: "mincheol", age: 20 },
  { name: "cheolsu", age: 40 },
];

let filterList2 = userList.filter(function (obj) {
  return obj.age >= 30;
});
console.log(filterList2);

mapList2 = filterList2.map(function (obj) {
  return obj.name;
});
console.log(mapList2);

// 메서드 체이닝 : 메서드의 반환값에 따라 메서드를 이어서 실행한다.
let filterList = userList
  .filter((user) => user.age >= 30)
  .map((user) => user.name);
console.log(filterList);
