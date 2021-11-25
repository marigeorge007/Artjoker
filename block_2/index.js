//1 Написать свою реализацию функций bind, call. Новая реализация должна по функционалу работать аналогично как и соответствующие стандартные функции. Без использования стандартных функций.
//my bind

Function.prototype.myBind = function (object, ...rest) {
  object[symbol] = this;
  return function (...args) {
    let symbol = Symbol();
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
Array.prototype.myReduce = function (callback) {
  let acc = 0; // шаг1 декларируем аккумулятор;
  for (let i = 0; i < this.length; i++) { // шаг2 выполняется цикл;
    callback(acc = acc + this[i]); //  шаг3 складываем сумму всех элементов в массиве в aккумулятор шаг1;
  }
  return acc; //  шаг4 возвращаем аккумулятор;
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