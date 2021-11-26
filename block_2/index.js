//1 Написать свою реализацию функций bind, call. Новая реализация должна по функционалу работать аналогично как и соответствующие стандартные функции. Без использования стандартных функций.
//my bind

Function.prototype.myBind = function (object, ...rest) {
  let symbol = Symbol();
  object[symbol] = this;
  return function (...args) {
    let result = object[symbol](...rest, ...args);
    delete object[symbol];
    return result;
  };
}

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
    if (callback(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
}

//Reduce
Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    callback(acc = acc + this[i]);
    return acc;
  }
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