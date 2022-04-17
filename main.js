/* --------------------------------
// 산술 연산자(arithmetic operator)

console.log(1 + 2)
console.log(5 - 7)
console.log(3 * 4)
console.log(10 / 2)
console.log(7 % 5) //나머지 값;
*/

/* --------------------------------
// 할당 연산자(assignment operator)
//const : 재할당 불가 , let : 재할당 가능

let a = 2

// a = a + 1
a %= 1

console.log(a)
*/

/* --------------------------------
// 비교 연산자 (comparison operator)

const a = 13
const b = 13

// 일치 연산자
console.log( a === b )

// 예제
function isEqual(x, y) {
  return x === y
}

console.log(isEqual(1, 1))
console.log(isEqual(2, '2'))
*/


/* --------------------------------
// 불일치 연산자
const a = 13
const b = 13

console.log(a !== b)

console.log(a < b)
console.log(a <= b)
*/

/* --------------------------------
// 논리 연산자(logical operator)

const a = 1 === 123
const b = 'AB' === 'ABC'
const c = false

console.log(a)
console.log(b)
console.log(c)

console.log('&& :', a && b && c) // 1개라도 다르면 false
console.log('|| :', a || b || c) // 1개 이상 True면 True / True가 없으면 false로 노출
console.log('! :' , !a) //부정 연산자
*/

/* --------------------------------
// 삼항 연산자(ternary operator)
const a = 1 < 2

if (a) {
  console.log('참')
} else {
  console.log('거짓')
}

console.log(a ? '참' : '거짓')
*/

// 조건문 Random 함수 불러오기 import random from './getRandom'

/* --------------------------------
// 조건문 (If statement)
const a = random()

if(a == 0) {
  console.log('a is 0')
} else if ( a === 2) {
  console.log('a is 2')
} else if ( a === 4) {
  console.log('a is 4')
} else {
  console.log('rest...')
}
*/

/* --------------------------------
// 조건문 (Switch statement)
const a = random()

switch (a) {
  case 0:
    console.log('a is 0')
    break
  case 2:
    console.log('a is 2')
    break
  case 4:
    console.log('a is 4')
    break
  default:
    console.log('rest...')
}
*/

/* --------------------------------
// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul')

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement('li')
  li.textContent = `list-${i + 1}`
  if ((i+1) % 2 == 0) {
    li.addEventListener('click', function() {
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li)
}
*/

/* --------------------------------
// 변수 유효범위(Variable Scope)
// var -> 함수레벨 범위, (let, const) -> 블록레벨 범위 요즘엔 let / const 사용

function scope() {
  if(true) {
    var a = 123    
  }
  console.log(a)
}
scope()
*/

/* --------------------------------
// 형 변환(Type conversion)

// const a = 1
// const b = '1'

// console.log(a == b) 
// 동등 연산자 문자와 숫자일 경우 같다고 나온다 / 일치연산자 ' === '경우 false로 나온다

// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', '-12, '3.14', ...

// Falsy(거짓 같은 값) - 몇개 없으니 알아두자!
// false, '', null, undefined, 0, -0, NaN (Not a Number)

if (0) {
  console.log(123)
}
if (true) {
  console.log(123)
}
*/

// --------------------------------
// 함수 복습
/* x, y 매개변수
function sum(x, y) {
  console.log(x + y)
}

sum(1, 3) // 1, 3인수
sum(4, 12)
*/

/* 익명함수
const sum = function(x, y) {
  return x + y
}
// return 있으면 그 뒤로는 종료 된다는 뜻으로 그 뒤에 내용 있으면 실행하지 않음
*/

/* 기명함수
function sum(x, y) {
  return x + y
}
*/

// const a = sum(1, 3)
//const b = sum(4, 12)

//console.log(a)
//console.log(b)
// console.log(a + b)

/* 
function sum(x, y) {
  if (x < 2) {
    return
  }
  return x + y
}

console.log(sum(7, 3))
*/ 

/* 
function sum() {
  console.log(arguments)
  return arguments[0] + arguments[1]
}

console.log(sum(7, 3))
*/ 
/*
function sum(x, y) {
  return x + y
}

console.log(sum(7, 3))
*/ 

/* --------------------------------
// 화살표 함수
// () => {} vs function () {}

const double = function (x) {
  return x * 2
}
console.log('double : ', double(7))

// --------------------------------
const doubleArrow = (x) => {
  return x * 2
}
console.log('doubleArrow : ', doubleArrow(7))
// --------------------------------

const doubleArrow2 = x => [1, 2, 3]
console.log('doubleArrow2 : ', doubleArrow2(7))
// --------------------------------

const doubleArrow3 = (x, y) => x * 2
console.log('doubleArrow3 : ', doubleArrow3(7))
// --------------------------------

const doubleArrow4 = (x) => ({name : 'IDMASH'})
console.log('doubleArrow4 : ', doubleArrow4(7))
*/

/* --------------------------------
// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression

const a = 7
function double() {
  console.log(a * 2)
}
double();

(function () {
  console.log(a * 2)
})();

(function () {
  console.log(a * 2)
}());
*/

/* --------------------------------
// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a = 7

double()

function double() {
  console.log(a * 2)
}
*/

/* 위와 동일하나 주로 사용되어지는 기법은 위 / 위에서부터 아래로 순차적으로 읽어가기 때문에
const double = function () {
  console.log(a * 2)
}

double()
*/

/* -------------------------------- 
// 타이머 함수 / ms 
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout() : 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료

setTimeout(function () {
  console.log('IDMASH')
}, 3000)
//-------------------------------- 
setTimeout(() => {
  console.log('IDMASH')
}, 3000)
//-------------------------------- 
const timer = setTimeout(() => {
  console.log('IDMASH')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearTimeout(timer)
})
//-------------------------------- 
const timer2 = setInterval(() => {
  console.log('IDMASH')
}, 3000)

const h1El2 = document.querySelector('h1')
h1El2.addEventListener('click', () => {
  clearInterval(timer2)
})
//-------------------------------- 
*/

/* -------------------------------- 

// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

function timeout(callback) {
  setTimeout(() => {
    console.log('IDMASH')
    callback()
  }, 3000)
}
timeout(() => {
  console.log('Done!')
})
*/

/* -------------------------------- 
// 생성자 함수
const idmash = {
  firstName: 'Idmash',
  lastName: 'Cho',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(idmash.getFullName())

const amy = {
  firstName: 'Amy',
  lastName: 'Clarke',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(amy.getFullName())

const neo = {
  firstName: 'Neo',
  lastName: 'Smith',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(neo.getFullName())
*/
/*
function User(first, last) {
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const idmash = new User('Idmash', 'Cho')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(idmash.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())
*/

/* -------------------------------- */
// this
// 일반(Normal) 함수는 호출 위치에 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!
/*
const heropy = {
  name: 'Heropy',
  normal: function () {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}
heropy.normal()
heropy.arrow()
//--------------------------------
const amy = {
  name: 'Amy',
  normal: heropy.normal,
  arrow: heropy.arrow
}
amy.normal()
amy.arrow()
*/
//--------------------------------
/*
function User(name) {
  this.name = name
}
User.prototype.normal = function () {
  console.log(this.name)
}

User.prototype.arrow = () => {
  console.log(this.name)
}

const heropy = new User('Heropy')

heropy.normal()
heropy.arrow()
*/
/*
const timer = {
  name: 'Heropy!!',
  timeout: function() {
    // setTimeout(함수, 시간)
    setTimeout(() => {
      console.log(this.name)
    }, 2000)
  }
}
timer.timeout()
*/

// ES6 Classes
/*
const heropy = {
  name: 'Heropy',
  //normal: function () {
  normal() {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}

heropy.normal()
heropy.arrow()
*/
/* 해당 항목 새로운 문법으로 작성 ( class 키워드 사용하여 생성자 함수 만들기)
function User(first, last) {
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const idmash = new User('Idmash', 'Cho')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(idmash.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())
*/
/*
class User{
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const idmash = new User('Idmash', 'Cho')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(idmash.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())
*/

class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

//extends 확장(상속)
class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
}
const myBicycle = new Bicycle('삼천리', 2)
const daughtersBicycle = new Bicycle('세발', 3)
console.log(myBicycle)
console.log(daughtersBicycle)

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}
const myCar = new Car('벤츠', 4, true)
const daughtersCar = new Car('포르쉐', 4 , false)
console.log(myCar)
  console.log(daughtersCar)