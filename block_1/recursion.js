//Рекурсия

// task 3
const getNumberDigits = (number, result, index) => {
  let numArr = number.toString().split('');
  index = index || 0;
  result = result || {};
  

  if (numArr.length > index) {
     result[numArr[index]] = ++result[numArr[index]] || 1;
     return getNumberDigits(number, ++index, result)
  };

  return result;
};

// task 4
const countUniqueWords = (sentence, result, index) => {
  let wordArr = sentence.split(' ');
    index = index || 0;
    result = result || {};

  if (wordArr.length > index) {
    result[wordArr[index]] = ++result[wordArr[index]] || 1;
    return countUniqueWords(sentence, result, ++index);
  }
  return result;
};


// task 5
 const getNumberWords = (sentence, index, result) => {
  index = index || 0;
  result = result || {};
  let wordArr = sentence.split(' ');

    if (wordArr.length > index) {
      result[wordArr[index]] = ++result[wordArr[index]] || 1;
      getNumberWords(sentence, ++index, result) 
  };

  return result;
};

// task 6 
function makefibonacci(num) {
  if (num < 2) {
    return num;
  };
  return fibonacchi(num - 1) + fibonacchi(num - 2);
};

// task 8

function getFactorial(num) {

  if (num === 1) {
    return 1;
  }

  return num * getFactorial(n - 1);
}

//  task 9

const getSumElements = (arr, sum, index) => {
    index = index || 0;
    sum = sum || 0;
  
    if (index < arr.length) {
        if (arr[index] % 2 === 0) {
            sum += arr[index];
            return getSumElements(arr, sum, ++index);
        }else {
            return getSumElements(arr, sum, ++index);
        }
    }
};
const getSumElements = (arr, sum, index) => {
    index = index || 0;
    sum = sum || 0;
    if (index < arr.length) {
        if (arr[index] % 3 === 0) {
          sum += arr[index];
          return getSumElements(arr, sum, ++index);
        }else {
          return getSumElements(arr, sum, ++index);
        }
      }
    };
    
const getSumElements = (arr, sum, index) => {
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

const getSumElements = (arr, sum, index) => {
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
  }
}

// task 10

const countNegativeNum = (arr, index, count) => {
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
};
//количество простых
const countArrElements = (arr, count, index) => {
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
}
//количество нулевых
const countArrElements = (arrNumber, count, index) => {
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
}

//количество положительныx
const countArrElements = (arrNumber, count, index) => {
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
}



// task 11 
const convertToBinary = (num, binary, index) => {
    binary = binary || [];
    index = index || 0;

    if (num > 0) {
        binary.unshift(num % 2);
        num = Math.floor(num / 2);
        return convertToBinary(num, binary, ++index);
    }
        return binary.join('');
}



const convertToDemention = (number, num, sum, power, index) => {
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
}
convertToDemention(111);



// task 13

const getSum = (min, max, sum = 0) => {
    sum = sum + min;

    if (min === max) {
        return sum;
    }

    return getSum(++min, max, sum);
}

const getSum = (min, max, sum, index) => {
    sum = sum || 0;
    index = index || 0;

    if (index <= max) {
        sum += index;
        return getSum(min, max, sum, ++index);
    }

    return sum;
}

//.....
const getSum = (min, max, sum = 0) => {
    if (min % 3 === 0) {
        sum = sum + min;
    }

    if (min === max) {
        return sum;
    }

    return getSum(++min, max, sum);
}


//......
const getSum = (min, max, sum = 0) => {
    sum = sum || 0;

    if (++min <= max) {
        if (min > 0) {
            sum += min;
        }
        return sum = sumMinMaxValue(min, max, sum);
    }

    return sum;
}

 //task 15

const transposeMatrix = (matrix, row, coll, result) => {
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
}


//task 16
const addTwoMatrix = (matrix, matrix2, i, j) => {
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
}

//task 17

const deleteMatrixWithZero = (matrix, index) => {
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
}

const deleteColumnWithZero = (matrix, index) => {
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
};
