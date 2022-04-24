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

/* 
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
*/

/* 220424
// JS데이터
// 문자
const result = 'Hello world!'.indexOf('cho')
console.log(result)
// String.prototype.indexOf()
*/

//const str = '0123'
//console.log('01 23'.length)

//const str = 'Hello world!'
//console.log(str.indexOf('IDMASH') !== -1) // false 
//console.log(str.slice(0,3)) //0부터 시작 ~ 3전인 2까지 노출 0,1,2 나옴
//console.log(str.replace('world', 'IDMASH')) // 문자 치환

//const str = 'idmash88@gmail.com'
//console.log(str.match(/.+(?=@)/)[0]) //정규표현식/.+(?=@)/ 활용

/*
const str = '     Hello world   '
console.log(str)
console.log(str.trim())
*/
/*
const pi = 3.14159265358979
console.log(pi)

const str = pi.toFixed(2)
console.log(str)
console.log(typeof str)

const integer = parseInt(str)
const float = parseFloat(str)
console.log(integer)
console.log(float)
console.log(typeof integer, typeof float)
*/
/*
console.log('abs : ', Math.abs(-12))

console.log('min : ', Math.min(2, 8))

console.log('max : ', Math.max(2, 8))

console.log('ceil : ', Math.ceil(3.14)) // 올림

console.log('floor : ', Math.floor(3.14)) // 내림

console.log('round : ', Math.round(3.5)) // 반올림

console.log('random : ', Math.random())
*/

/*
const numbers =[1, 2, 3, 4] // 0번 부터 시작
const fruits =  ['Apple', 'Banana', 'Cherry'] // element == 요소 == item
*/
//console.log(numbers[1])
//console.log(fruits[2])
//console.log(numbers.length)
//console.log(fruits.length)
//console.log([1, 2].length)
//console.log([].length)

//.concat() 원본배열이 수정되지 않은 상태에서 새로운 배열 추가
//console.log(numbers.concat(fruits))
//console.log(numbers)
//console.log(fruits)

//forEach() 배열데이터 만큼 반복
//fruits.forEach(function (element, index, arry) {
//  console.log(element, index, arry)
//})

//fruits.forEach(function (fruit, i) {
//  console.log(fruit, i)
//})

//.map() item의 갯수 만큼 callback 함수 반환 return을 이용하여 받는다
/*
const a = fruits.forEach(function (fruit, index) {
  console.log(`${fruit}-${index}`)
})
console.log(a)

const b = fruits.map(function (fruit, index) {
  return `${fruit}-${index}`
})
console.log(b)

const c = fruits.map(function (fruit, index) {
  return {
    id : index,
    name : fruit
  }
})
console.log(c)
*/
/*
const a = fruits.forEach((fruit, index) => {
  console.log(`${fruit}-${index}`)
})
console.log(a)

const c = fruits.map((fruit, index) => ({
    id : index,
    name : fruit
  }))
console.log(c)
*/

// .filter() true가 반환 된 값만 나온다
//const numbers =[1, 2, 3, 4] // 0번 부터 시작
//const fruits =  ['Apple', 'Banana', 'Cherry'] // element == 요소 == item
/*
const a = numbers.map(number => {
  return number < 3
})
console.log(a)

const b = numbers.filter(number => {
  return number < 3
})
console.log(b)
*/
/*
// 화살표 함수로 변환
const a = numbers.map(number => number < 3)
console.log(a)

const b = numbers.filter(number => number < 3)
console.log(b)

console.log(numbers)
*/
/*
const a = fruits.find(fruit => {
  return /^C/.test(fruit) // /^B/ 정규표현식으로 ^:시작한다 C:로 시작하는 
})
console.log(a)

const b = fruits.findIndex(fruit => {
  return /^C/.test(fruit) // /^B/ 정규표현식으로 ^:시작한다 C:로 시작하는 
})
console.log(b)
*/
/*
// 화살표 함수로 변환
const a = fruits.find(fruit => /^C/.test(fruit))
console.log(a)

const b = fruits.findIndex(fruit => /^C/.test(fruit))
console.log(b)
*/

/*
// .includes() ()안의 값이 포함되어 있나 확인 / true / false 
const numbers =[1, 2, 3, 4] // 0번 부터 시작
const fruits =  ['Apple', 'Banana', 'Cherry'] // element == 요소 == item

const a = numbers.includes(3)
console.log(a)

const b = fruits.includes('IDMASH')
console.log(b)
*/

/*
// .push() : 가장 뒤에 밀어넣는것  .unshift() : 가장 앞에 밀어넣는 것
// 원본 수정됨 주의!!!
const numbers =[1, 2, 3, 4] // 0번 부터 시작
const fruits =  ['Apple', 'Banana', 'Cherry'] // element == 요소 == item

numbers.push(5)
console.log(numbers)

numbers.unshift(0)
console.log(numbers)
*/
/*
// .reverse() 원본 배열을 반대로 출력
// 원본 수정됨 주의!!!
const numbers =[1, 2, 3, 4] // 0번 부터 시작
const fruits =  ['Apple', 'Banana', 'Cherry'] // element == 요소 == item

numbers.reverse()
fruits.reverse()
console.log(numbers)
console.log(fruits)
*/

/*
// .splice(index, 지울 갯수, 넣는 값) index번호에서 시작해서 총 몇개를 지워라 혹은 끼워넣어라
// 시작되는 부분에서 끼워 넣을지 지우고 값을 바꿀지
// 원본 수정됨 주의!!!
const numbers =[1, 2, 3, 4] // 0번 부터 시작
const fruits =  ['Apple', 'Banana', 'Cherry'] // element == 요소 == item

numbers.splice(2, 1, 999)

console.log(numbers)
console.log(fruits)
fruits.splice(2, 0, 'Orange')
console.log(fruits)
*/

/*
const userAge = {
  // key: value
  name: 'Idmash',
  age: 85
}
const userEmail = {
  name: 'Idmash',
  email: 'idmash88@gmail.com'
}

// 정적메소드 assign 대상, 출처 객체 userAge에 userEmail 복사해서 넣는다
// 참조형 데이터 : 메모리 데이터에 있는 값을 가져온다 {}, [], function
// const target = Object.assign(userAge, userEmail)
//console.log(target)
//console.log(userAge)
//console.log(target === userAge) // 같은 장소를 바라봐서 true

const a = { k: 123 }
const b = { k: 123 }
console.log(a === b) // 다른 장소를 바라봐서 false

const target = Object.assign({}, userAge, userEmail)
// 새로운 객체 데이터를 만들어서 userAge를 건드리지 않음
console.log(target)
console.log(userAge)
console.log(target === userAge) // 같은 장소를 바라봐서 true
*/

/*
const user = {
  name: 'Idmash',
  age: 85,
  email: 'idmash88@gmail.com'
}

const keys = Object.keys(user)
console.log(keys)
// ['name', 'age', 'email'] 이름만 빼와서 배열로 만들어주는 것

console.log(user['email'])

const valuse = keys.map(key => user[key])
console.log(valuse)
*/

/*
// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당
const user = {
  name: 'Idmash',
  age: 85,
  email: 'idmash88@gmail.com'
}

const { name: idz, age, address = 'Korea' } = user
// E.g user.address

console.log(`사용자의 이름은 ${idz}입니다.`)
console.log(`${idz}의 나이는 ${age} 입니다.`)
console.log(`${idz}의 이메일 주소는 ${user.email} 입니다.`)
console.log(address)
console.log(user.address)

const fruits =  ['Apple', 'Banana', 'Cherry']
const [a, b, c, d] = fruits
console.log(a, b, c, d)

const [, ba] = fruits // ,넣어야함 순서 그대로 나온다.
console.log(ba)
*/

/*
// 전개 연산자 (Spread)
const fruits =  ['Apple', 'Banana', 'Cherry', 'Orange']
console.log(fruits)
console.log(...fruits) // === console.log('Apple', 'Banana', 'Cherry')
*/
/*
function toObject(a, b, ...c) { // rest parameter ...c -> 뒤에꺼는 다 C로 받는다
  return {
    a: a, //속성의 이름과 변수 이름이 같은 경우 하나만 남겨도 됨 a , b, c
    b: b,
    c: c
  }
}
*/
/*
// 위 함수 간략화
const toObject = (a, b, ...c) => ({a , b, c})
console.log(toObject(...fruits)) // === console.log(toObject(fruits[0], fruits[1], fruits[2]))
*/

// 데이터 불변성(Immutability)
// 원시 데이터: String, Number, Boolean, undefined, null 생긴게 같은면 같고 다르면 다른거
// 참조형 데이터: Object, Arry, Function 생긴게 같아도 다른 데이터 일 수 있다
// 원시 데이터
//-----------------------------------------------------
// |1: 1 / 1(c) |2: 4        |3: 7        |4: 
//-----------------------------------------------------
/*let a = 1
let b = 4
console.log(a, b, a === b)

b = a
console.log(a, b, a === b)

a = 7
console.log(a, b, a === b)

let c = 1
console.log(b, c, b === c)*/

/*
// 참조형 데이터
//-----------------------------------------------------------------------
// |1: { k: 1 -> k: 7 -> k: 2 -> k: 9  } |2: { k: 1           } |3: {                }
//-----------------------------------------------------------------------
let a = { k: 1 }
let b = { k: 1 }
console.log(a, b, a === b)

a.k = 7
b = a
console.log(a, b, a === b)

a.k = 2
console.log(a, b, a === b)

let c = b
console.log(a, b, c, a === b)

a.k = 9
console.log(a, b, c, a === b)
*/

/*


// |1:         |2:           |3:           |4: 
// 얕은 복사(Shallow copy), 깊은 복사(Deep copy)
import _ from 'lodash'

const user = {
  name: 'Idmash',
  age: 85,
  emails: ['idmash88@gmail.com']
}
// const copyUser = user 이렇게 되면 값이 다 바뀜
// const copyUser = Object.assign({},user) // 대상객체, 출처객체 copyUser user 값이 각각 따로
/* 얕은복사
const copyUser = {...user} //Object.assign({},user) 같은 
console.log(copyUser === user)

user.age = 22 
console.log('user', user)
console.log('copyUser', copyUser) 

console.log('------')
console.log('------')

user.emails.push('freezeid@gmail.com')
console.log(user.emails === copyUser.emails)
console.log('user', user)
console.log('copyUser', copyUser) 
*/
/*
// 깊은 복사
const copyUser = _.cloneDeep(user) // _lodash의 cloneDeep의 기능을 빌려온다
console.log(copyUser === user)

user.age = 22 
console.log('user', user)
console.log('copyUser', copyUser) 

console.log('------')
console.log('------')

user.emails.push('freezeid@gmail.com')
console.log(user.emails === copyUser.emails)
console.log('user', user)
console.log('copyUser', copyUser) 
*/
/*
// export default function random() { <- 이처럼 default로 나오는거는 random 이름 생략 가능
// export function random() { <- 이처럼 default 없이 이름 있는 함수는 
// import { random } from './getRandom' <- import 시 {} 안에 모듈 이름을 넣어주어야 사용 가능
// 한번만 내보낸다 export default 사용, 한번 이상 내보내야한다 -> 그러면 이름있는 함수 사용

import _ from 'lodash' // From `node_modules`!
import checkType from './getType' // getType.js
//import { random, user as idz} from './getRandom' //getRandom.js
import * as R from './getRandom' //./getRandom 안에 있는 *(모든) 함수를 가져와서 내가 지정한 곳(R)으로 옮긴다

console.log(_.camelCase('the hello world'))
console.log(checkType([1, 2, 3]))
//console.log(random(), random())
//console.log(idz)
console.log(R)
*/

import _ from 'lodash'
/*
const usersA = [
  { 
    userId: '1',
    name: 'IDMASH'
  },
  {
    userId: '2',
    name: 'Neo'
  }
]

const usersB = [
  { 
    userId: '1',
    name: 'IDMASH'
  },
  {
    userId: '3',
    name: 'Amy'
  }
]

const usersC = usersA.concat(usersB)
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId')) // 배열데이터 하나 일 때 사용

const usersD = _.unionBy(usersA, usersB, 'userId') // 배열데이터 여러개 일 때 사용
console.log('unionBy', usersD)
*/

/*
// find / findIndex
const users = [
  { 
    userId: '1',
    name: 'IDMASH'
  },
  {
    userId: '2',
    name: 'Neo'
  },
  {
    userId: '3',
    name: 'Amy'
  },
  {
    userId: '4',
    name: 'Evan'
  },
  {
    userId: '5',
    name: 'Lewis'
  }
]

const foundUser = _.find(users, { name: 'Amy' })
const foundUserIndex = _.findIndex(users, { name: 'Amy' })
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, { name: 'IDMASH' })
console.log(users)
*/
/*
import myData from './myData.json'

console.log(myData)

const user = {
  name: 'Idmash',
  age: 85,
  emails: [
    'idmash88@gmail.com',
    'mongareye@gmail.com'
  ]
}
console.log('user', user)

const str = JSON.stringify(user)
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(str)
console.log('obj', obj)
*/
/*
const user = {
  name: 'Idmash',
  age: 85,
  emails: [
    'idmash88@gmail.com',
    'mongareye@gmail.com'
  ]
}

const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 22
console.log(obj)

localStorage.setItem('user', JSON.stringify(obj))
//console.log(JSON.parse(localStorage.getItem('user')))
//localStorage.removeItem('user')
*/

import axios from 'axios'

function fetchMovies() {
  axios
  .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
  .then(res => {
    console.log(res)
    const h1El = document.querySelector('h1')
    const imgEl = document.querySelector('img')
    h1El.textContent = res.data.Search[0].Title
    imgEl.src = res.data.Search[0].Poster
  })
}
fetchMovies()






