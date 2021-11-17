const memoizer = (fn) => {
    let cache = {};

    return (n) => {
        if (n in cache) {
            return cache[n];
        }
        return cache[n] = fn(n);
    }
};


//   task 3

const getNumberDigits = memoizer(function(number, result, index) {
let numArr = number.toString().split('');
    index = index || 0;
    result = result || {};

  if (numArr.length > index) {
    result[numArr[index]] = ++result[numArr[index]] || 1;
    return getNumberDigits(number, ++index, result)
  };

  return result;
});


// task 4
const countUniqueWords = memoizer(function (sentence, index, result) {
  index = index || 0;
  result = result || {};
  let wordArr = sentence.split(' ');

  if (wordArr.length > index) {
     result[wordArr[index]] = ++result[wordArr[index]] || 1;
     return countUniqueWords(sentence, ++index, result);
  }
  return result;
});

// task 5

const getNumberWords = memoizer(function(sentence, index, result) {
   index = index || 0;
   result = result || {};
   let wordArr = sentence.split(' ');
      
     if (wordArr.length > index) {
        result[wordArr[index]] = ++result[wordArr[index]] || 1;
       getNumberWordsMemoizer(sentence, ++index, result);
    }
    
        return result;
   });
    
// task 6

  function makeFibonacciMemoizer(num, cache) {
    cache = cache || {};

    if (cache[num]) {
       return cache[num];
    };

    if (num <= 1) {
        return 1;
    }
    return cache[num] = makeFibonacciMemoizer(num - 1, cache) + makeFibonacciMemoizer(num - 2, cache);
}

// task 8 
function getFactorial() {
  let cache = [];

  return function factorial() {
    if (n < 2) {
      return 1;
    }
    if (cache[n]) {
      return cache[n];
    }
    return cache[n] = n * factorial(n - 1);
  }
};

// task 9

const getSumElements = memoizer(function(arr, sum, index) {
    index = index || 0;
    sum = sum || 0;
  
    if (index < arr.length) {
        if (arr[index] % 2 === 0) {
            sum += arr[index];
            return getSumElements(arr, sum, ++index);
        } else {
            return getSumElements(arr, sum, ++index);
        }
    }
});

const getSumElements = memoizer(function(arr, sum, index) {
    index = index || 0;
    sum = sum || 0;
  
    if (index < arr.length) {
      if (arr[index] % 3 === 0) {
          sum += arr[index];
          return getSumElements(arr, sum, ++index);
      } else {
          return getSumElements(arr, sum, ++index);
      }
    }
    });
const getSumElements = memoizer(function(arr, sum, index) {
    index = index || 0;
    sum = sum || 0;

    if (index < arr.length) {
      if (arr[index] > 0) {
          sum += arr[index];
          return getSumElements(arr, sum, ++index);
      } else {
          return getSumElements(arr, sum, ++index);
      }
    }
  });

const getSumElements = memoizer(function(arr, sum, index) {
    index = index || 0;
    sum = sum || 0;

  if (index < arr.length) {
    if (arr[index] < 0) {
        sum += arr[index];
        return getSumElements(arr, sum, ++index);
    } else {
        return getSumElements(arr, sum, ++index);
    }
  }
    return sum;
  });

//task 10
const countNegativeNum = memoizer(function(arr, index, count) {
    index = index || 0;
    count = count || 0;
    if (i < arr.length) {

        if (arr[index] < 0) {
            count++;
        }
        return countNegativeNum(arr, ++index, count);
    } else {
        return count;
    }
});
//количество простых
const countArrElements = memoizer(function(arr, count, index) {
    index = index || 0;
    count = count || 0;

    if (index < arr.length) {
        if (arr[index] % arr[index] === 0) {
            count++;
            return countArrElements(arr, count, ++index);
        } else {
            return ccountArrElements(arr, count, ++index);
        }
    }
    return count;
});

//количество нулевых
const countArrElements = memoizer(function(arrNumber, count, index) {
    index = index || 0;
    count = count || 0;

    if (index < arrNumber.length) {
        if (arrNumber[index] === 0) {
            count++;
            return countArrElements(arrNumber, count, ++index);
        } else {
            return countArrElements(arrNumber, count, ++index);
        }
    }
    return count;
});

//количество положительныx
const countArrElements = memoizer(function(arrNumber, count, index) {
    index = index || 0;
    count = count || 0;

    if (index < arrNumber.length) {
        if (arrNumber[index] > 0) {
            count++;
            return countNumb(arrNumber, count, ++index);
        } else {
            return countNumb(arrNumber, count, ++index);
        }
    }
    return count;
});


//task 11
const convertToBinary = memoizer(function(num, binary, index) {
    binary = binary || [];
    index = index || 0;

    if (num > 0) {
        binary.unshift(num % 2);
        num = Math.floor(num / 2);
        return convertToBinary(num, binary, ++index);
    }
        return binary.join('');
});

const convertToDemention = memoizer(function(number, num, sum, power, index) {
    num = num || number.toString().split('').reverse();
    sum = sum || 0;
    power = power || 0;
    index = index || 0;

    if (index < num.length) {
        num[index] = +num[index] * (2 ** power);
        sum += num[index];
        power++;
        return convertToDemention(number, num, sum, power, ++index);
    }
    return sum;
});
convertToDemention(111);


// task 13
const getSum = memoizer(function(min, max, sum = 0) {
    sum = sum + min;

    if (min === max) {
        return sum;
    }

    return getSum(++min, max, sum);
});

const getSum = memoizer(function(min, max, sum, index) {
    sum = sum || 0;
    index = index || 0;

    if (index <= max) {
        sum += index;
        return getSum(min, max, sum, ++index);
    }

    return sum;
});

//.....
const getSum = memoizer(function(min, max, sum = 0) {
    if (min % 3 === 0) {
        sum = sum + min;
    }

    if (min === max) {
        return sum;
    }

    return getSum(++min, max, sum);
});


//......
const getSum = memoizer(function(min, max, sum = 0) {
    sum = sum || 0;

    if (++min <= max) {
        if (min > 0) {
            sum += min;
        }
        return sum = sumMinMaxValue(min, max, sum);
    }

    return sum;
});
  


//task 15
const transposeMatrix = memoizer(function(matrix, row, coll, result) {
    row = row || 0;
    coll = coll || 0;
    result = result || [];

    if (row < matrix[0].length) {       
        if (typeof result[row] === "undefined") {
            result[row] = [];
        }

        if (coll < matrix.length) {
            result[row][coll] = matrix[coll][row];
            return transposeMatrix(matrix, row, ++coll, result);
        }
        coll = 0;
        return transposeMatrix(matrix, ++row, coll, result);
    }

    return result;
});


  //task 16
const addTwoMatrix = memoizer(function(matrix, matrix2, i, j) {
    i = i || 0;
    j = j || 0;

    if (i < matrix.length) {
        if (j === matrix.length) {
            j = 0;
            return addTwoMatrix(matrix, matrix2, ++i, j);
      } else {
         matrix[i][j] += matrix2[i][j];
         return addTwoMatrix(matrix, matrix2, i, ++j);
        }
    } else {
        return matrix;
    }
});

//task 17 

const deleteMatrixWithZero = memoizer(function(matrix, index) {
    index = index || 0;

    if (i < matrix.length) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix.splice(index, 1);
                --index;
                break;
            }
        }
        return deleteMatrixWithZero(matrix, ++index);
    }

    return matrix;
});


const deleteColumnWithZero = memoizer(function(matrix, index) {
    index = index || 0

    if (i < matrix.length) {
        for (let j = 0; j < matrix[0].length; j++) {

            if (matrix[j][i] === 0) {
                for (let k = 0; k < matrix.length; k++) {
                    matrix[k].splice(index, 1);
                }
                break;
            }
        }
        return deleteColumnWithZero(matrix, ++index);
    }
        return matrix;
});
