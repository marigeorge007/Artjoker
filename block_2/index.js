//1 Написать свою реализацию функций bind, call. Новая реализация должна по функционалу работать аналогично как и соответствующие стандартные функции. Без использования стандартных функций.
// my bind
let element = {
  height: 25,
  getHeight: function () {
    return this.height;
  },
};

let getElementHeight = element.getHeight.bind(element);
getElementHeight();

// Call
let sizes = {
    width: 5,
    height: 10
  },
  getSquare = function () {
    return this.width * this.height;
  };

getSquare.call(sizes);

//2.
//Map
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const numArr = arr.map((num) => {
//   return {
//     digit: num,
//     odd: num % 2 !== 0,
//   };
// });
Array.prototype.myMap = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

//Filter

// const names = ['Mariia', 'Alex', 'Ann', 'Vladislav'];

// const shortNames = names.filter(function(name) {
//   return names.length < 5;
// });

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

// const arr = ['apple', 'orange', 'pear']

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);

Array.prototype.myReduce = function (callback) {
  let a = 0;
  for (let i = 0; i < this.length; i++) {
    callback(a = a + this[i])
  }
  return a;
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
}
//let fib = generatorFibonacci();
// console.log(fib.next().value); 
// console.log(fib.next().value);
// console.log(fib.next().value);
// console.log(fib.next().value);