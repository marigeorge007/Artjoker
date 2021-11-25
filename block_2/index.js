//1 Написать свою реализацию функций bind, call. Новая реализация должна по функционалу работать аналогично как и соответствующие стандартные функции. Без использования стандартных функций.
// my bind
const person = {
  name: 'Mark',
}

function info(phone, email) {
  console.log(`Имя: ${this.name}, Теl.:${phone}, Email: ${email}`);
};

function myBind(fn, context, ...rest) {
  return function (...args) {
    let uniqId = Date.now().toString();;
    context[uniqId] = fn;
    let result = context[uniqId](...rest.concat(args));
    delete context[uniqId];
    return result;
  }
}

myBind(info, person)('12345', 'm@gmail.com');
myBind(info, person, '12345')('m@gmail.com');
myBind(info, person, '12345', 'm@gmail.com')();

//my bind

Function.prototype.myBind = function (object, ...rest) {
  return function (...args) {
    let symbol = Symbol();
    object[symbol] = this;
    let result = object[symbol](...rest, ...args);
    delete object[symbol];
    return result;
  }
}


// Call
function myCall(fn, context, ...args) {
  let uniqId = Date.now().toString();
  context[uniqId] = fn;
  let result = context[uniqId](...args);
  delete context[uniqId];
  return result;
};
//myCall(info, person, '1234', 'c@gmail.com');

// Call 
Function.prototype.myCall = function (object, ...args) {
  let symbol = Symbol();
  object[symbol] = this;
  let result = object[symbol](...args);
  delete object[symbol];
  return result;
}

//2. Map
Array.prototype.myMap = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

// Filter
Array.prototype.myFilter = function (callback) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      arr.push(this[i]);
    }
  }
  return arr;
}

//Reduce
Array.prototype.myReduce = function (callback) {
  let res = 0;
  for (let i = 0; i < this.length; i++) {
    callback(res = res + this[i]);
  }
  return res;
}

//forEach
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

//Iterator
let fibonacciIterator = {
  [Symbol.iterator]() {
    let prevNum = 0;
    let current = 1;
    return {
      next() {
        [prevNum, current] = [current, prevNum + current];
        return {
          done: false,
          value: current
        };
      }
    };
  }
};

for (let num of fibonacciIterator) {
  if (num > 50) {
    break;
  }
};

function* generatorFibonacci() {
  let prevNum = 0;
  let nextNum = 1;

  while (true) {
    let current = prevNum;
    prevNum = nextNum;
    nextNum = prevNum + current;
    yield current;
  }
};
//let fib = generatorFibonacci();
// console.log(fib.next().value); 
// console.log(fib.next().value);
// console.log(fib.next().value);
// console.log(fib.next().value);