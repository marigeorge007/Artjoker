"use strict";
// task 1 Написать функцию которая проверяет являются две строки анаграммой или нет

function isAnagramma(word1, word2) {

 if (word1.length !== word2.length) {
   return false;
 };

   for (let i = 0; i < word1.length; i++) {
      let char1 = word1[i];
      let counter1 = 0;
      let counter2 = 0;

       for (let j = 0; j < word2.length; j++) {
           let char2 = word1[j];

            if (char1 === char2) {
                counter1++;
            };
            char2 = word2[j];

            if (char1 === char2) {
                counter2++;
          };
        };

        if (counter1 !== counter2) {
            return false;
        };
    };
    return true;
};

// task 3 Написать функцию которая вычисляет подсчет количество каждой цифре в числе

const getNumberDigits = (number) => {
  let numArr = number.toString().split('');
  let result = {};

  for (let i = 0; i < numArr.length; i++) {
    let item = numArr[i];
      result[item] = result[item] || 0;
      result[item]++;
  };
  return result;
};


// task 4 Написать функцию которая вычисляет подсчет уникальных слов в предложен
const countUniqueWords = (sentence) => {
    let wordArr = sentence.split(' ');
    let result = {};
    
    for (let i = 0; i < wordArr.length; i++) {
      let item = wordArr[i];
      result[item] = result[item] || 0;
      result[item]++;   
    }
    
    return result;
};



// task 5 Написать функцию которая вычисляет вхождение каждого слова в предложение

const getNumberWords = (sentence) => {
  let wordArr = sentence.split(' ');
      let result = {};
      
      for (let i = 0; i < wordArr.length; i++) {
        let item = wordArr[i];
        result[item] = result[item] || 0;
        result[item]++;   
      }
        return result;
    };


// task 6 Написать функцию которая возвращает N первых чисел фибоначчи

function makefibonacchi(num) {
  let result = [0, 1];

   for(let i = 2; i <= num; i++) {
      
    let prevNum1 = result[i - 1];
    let prevNum2 = result[i - 2];
    result.push(prevNum1 + prevNum2)
    }
       return result[num];
   };

  // task 7 Вычислить периметр и площадь для прямоугольника, треугольника и круга

class Rectangle {
    height;
    width;
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    square() {
        return this.width * this.height;
    }
    perimeter() {
        return (this.width * 2) + (this.height * 2);
    }
}
class Triangle {
    a;
    b;
    c;
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    square() {
        return 1 / 2 * this.a * this.b * Math.sin((this.c * Math.PI) / 180);
    }
    perimeter() {
        return this.a + this.b + this.c;
    }
}
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    square() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    perimeter() {
        return Math.PI * 2 * this.radius;
    }
}


// task 8 Вычислить факториал числа

function getFactorial(n) {
   let result = 1;

   for (i = 0; i < n; i++) {
      result = result + (n - 1)
    }
    return result;
 }

// task 9 Посчитать сумму всех элементов массива, только тех которые 
//  (Кратные двум, кратные трем, которые только положительные и нечетные)
 
const getSumElements = (arr) => { 
  let result = [];
  let result1 = [];
  let result2 = [];
  let result3 = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { 
      result += arr[i];
    }
    if (arr[i] % 3 === 0) { 
      result1 += arr[i];
    }
      if (arr[i] > 0) {
        result2 += arr[i];
    }
    if (arr[i] < 0) {
      result2 += arr[i];
    }
  }
  return [result, result1, result2, result3];
};

// task 10 количество элементов массива которые (Нулевые, отрицательные, положительные, простые числа)

const countNegativeNum = (arr) => {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0){
            counter++;
        }
    }
    return counter;
 };

const countArrElements = (arrNumber) => {
    let result1 = 0;
    let result2 = 0;
    let result3 = 0;
    let result4 = 0;

    for (let i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] < 0) {
            result1++;
        }
        if (arrNumber[i] > 0) {
            result2++;
        }
        if (arrNumber[i] % arrNumber[i] === 0) {
            result3++;
        }
        if (arrNumber[i] === 0) {
            result4++;
        }
    }

    return [result1, result2, result3, result4];
};


// task 11 Написать функции которые преобразовывают число из десятичной системы счисления в двоичную и в обратную сторону. (Достаточно написать для целых положительных чисел)


  function convertToBinary(num) { 
    let binary = [];
    while (num > 0) {
      binary.unshift(num % 2);
      num = Math.floor(n / 2);
    }
    return binary.join('');
  };
    
  function convertToDemention(number) {
    let num = number.toString().split('').reverse();
    let sum = 0;
    let power = 0;
      for (let i = 0; i < num.length; i++) {
        num[i] = +num[i] * (2 ** power);
        sum += num[i];
        power++;
      };
      return sum;
  };


// task 12 Пункты 9 и 10 выполнить для двумерных массивов
//   task 12.9
const getSumElements = (arr, number) => { 
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % number === 0) { 
      result.push(arr[i]); 
    }
  }
  return result;
};
getSumElements([5, -6, 7, 89], [2, 1, 3, -2, -11], 2);
getSumElements([5, -6, 7, 89, 2], [1, 3, -2, -11], 3);




  // task 12.10
  const countArrElements = (arr) => {
  let result = {};

    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];

          result[item] = result[item] || 0;
          result[item]++;
      };
    return result;
  };
  countArrElements([-1, -2, -3, 0], [0, 5, 12, 0, -10])



// task 13 Посчитать сумму значений чисел от min до max (всех, только тех которые кратны 3, только положительные)

const getSum = (min, max) => {
  let getSum = 0;

  for (let i = min; i <= max; i++) {
    getSum += i;
  }
  return getSum;
}

////
const getSum = (min, max) => {
  let getSum = 0;

  for (let i = min; i <= max; i++) {
    if (i % 3 === 0) {
      getSum += i;
    }
    
  }
  return getSum;
}

//////
const getSum = (min, max) => {
  let getSum = 0;

  for (let i = min; i <= max; i++) {
    if (i > 0) {
      getSum += i;
    }
  }
  return getSum;
}


// task 14 Найти среднее значение всех элементов одномерного/двумерного массива (Среднее только тех которые четные и которые не четные)


const findAverageMean = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}



const findAverageMean = (arr) => {
  let sum = 0;
  let count = 0;

  for ( i = 0; i < arr.lenght; i++) {

    if (arr[i] % 2 === 0 ) {
      sum += arr[i];
      count += 1;
    }
  }
  return sum / count;
}

///////
const findAverageMean = (arr) => {
  let sum = 0;
  let count = 0;

  for ( i = 0; i < arr.lenght; i++) {

    if (arr[i] % 2 !== 0 ) {
      sum += arr[i];
      count += 1;
    }
  }
  return sum / count;
}

//////
const findAverageMean = (arr) => {
  let sum = 0;
  let count = 0;

  for ( i = 0; i < arr.lenght; i++) {
    for ( j = 0; j < arr.lenght; j++) {
      sum += arr[i][j];
      count += 1;
    }
  }
  return sum / count;
}

//////

const findAverageMean = (arr) => {
  let sum = 0;
  let count = 0;

  for ( i = 0; i < arr.lenght; i++) {
    for ( j = 0; j < arr.lenght; j++) {

    if (arr[i][j] % 2 === 0 ) {

        sum += arr[i][j];
        count += 1;
      }
    }
  }
  return sum / count;
}

///////

const findAverageMean = (arr) => {
  let sum = 0;
  let count = 0;

  for ( i = 0; i < arr.lenght; i++) {
   for ( j = 0; j < arr.lenght; j++) {

     if (arr[i][j] % 2 !== 0 ) {
       sum += arr[i][j];
       count += 1;

      }
    }
  }
  return sum / count;
}

// task 15 Транспонировать матрицу

const transposeMatrix = (matrix) => {
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
      result[i] = [];
    }
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            result[i][j] = matrix[j][i];
        }
    }
    return result;
};



// task 16 Сложить две матрицы


const addTwoMatrix = (matrix, matrix2) => {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix[i].length; j++) {
            result[i].push(matrix[i][j] + matrix2[i][j]);
        }
    }
    return result;
};

// task 17 Удалить из двумерного массива строку в которой присутствует хотя бы один нулевой элемент. Для столбца аналогично реализовать.


const deleteMatrixWithZero = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
     for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 0) {
           matrix.splice(i, 1);
           break;
        }
     }
  }
  return matrix;
};

const deleteColumnWithZero = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {

          if (matrix[j][i] === 0) {
              for (let k = 0; k < matrix.length; k++) {
                  matrix[k].splice(i, 1);
              }
              break;
          }
      }
  }
  return matrix;
}










