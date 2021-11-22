"use strict";
//Рекурсия
// task 3
function getNumberDigits(number, result, index) {
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
function countUniqueWords(string, wordsArray, counter, uniqWordsCounter) {
    wordsArray = wordsArray || string.split(/[\s.,]+/gi);
    uniqWordsCounter = uniqWordsCounter || 0;
    counter = counter || 0;

    if (counter < wordsArray.length) {
        for (let word of wordsArray) {
            for (let word2 of wordsArray) {
                if (word === word2) {
                    ++counter;
                }
            }
            if (counter === 1) {
                ++uniqWordsCounter;
            }
            return countUniqueWords(string, wordsArray, ++counter, ++uniqWordsCounter);
        }
    }
    return uniqWordsCounter;
}

// task 5
function getNumberWords(sentence, index, result) {
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
function getSumOddEvenNum(array, result, index) {
    index = index || 0;
    result = result || 0;

    if (index < array.length) {
        if (array[i] > 0 && array[i] % 2 !== 0) {
            result += array[i];
            return getSumElements(array, result, ++index);
        } else {
            return result;
        }
    }
};

function getSumElements(array, result, index) {
    index = index || 0;
    result = result || 0;

    if (index < array.length) {
        if (arr[index] % x === 0) {
            result += array[index];
            return getSumElements(array, result, ++index);
        } else {
            return result;
        }
    }
};

// task 10
function countNegativeNum(arr, i, count) {
    index = index || 0;
    count = count || 0;
    if (i < arr.length) {

        if (arr[i] < 0) {
            count++;
        }
        return countNegativeNum(arr, ++i, count);
    } else {
        return count;
    }
}

// task 11 
function convertToBinary(num, binary, i) {
    binary = binary || [];
    index = index || 0;

    if (num > 0) {
        binary.unshift(num % 2);
        num = Math.floor(num / 2);
        return convertToBinary(num, binary, ++i);
    }
    return binary.join('');
}

function convertToDemention(number, num, sum, power, index) {
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
function getSumElements(min, max, callback, indexI) {
    indexI = indexI || min;
    let sum = 0;

    if (indexI <= max) {
        if (callback(indexI)) {
            sum += indexI;
        }

        return sum + getSumElements(min, max, callback, ++indexI);
    }

    return sum;
}

getSumElements(-10, 50, item => item % 3 === 0); //Сумма чисел кратных трем
getSumElements(-10, 50, item => item > 0); //Сумма положительных чисел
getSumElements(-10, 50, item => true); //Сумма всех чисел



//task 15
function transposeMatrix(matrix, row, coll, result) {
    row = row || 0;
    coll = coll || 0;
    result = result || [];

    if (row < matrix.length) {
        if (typeof result[row] === "undefined") {
            result.push([]);
        }
        if (coll < matrix.length) {
            result[coll].push(matrix[coll][row]);
            return transposeMatrix(matrix, row, ++coll, result);
        }
        coll = 0;
        return transposeMatrix(matrix, ++row, coll, result);
    }

    return result;
}

//task 16
function addTwoMatrix(matrix, matrix2, indexI, indexJ) {
    indexI = indexI || 0;
    indexJ = indexJ || 0;

    if (i < matrix.length) {
        if (j === matrix.length) {
            j = 0;
            return addTwoMatrix(matrix, matrix2, ++indexI, indexJ);
        } else {
            matrix[i][j] += matrix2[i][j];
            return addTwoMatrix(matrix, matrix2, indexI, ++indexJ);
        }
    } else {
        return matrix;
    }
}

//task 17
function deleteMatrixWithZero(matrix, i) {
    index = index || 0;

    if (i < matrix.length) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                matrix.splice(i, 1);
                --i;
                break;
            }
        }
        return deleteMatrixWithZero(matrix, ++i);
    }

    return matrix;
}

function deleteColumnWithZero(matrix, i) {
    index = index || 0;

    if (i < matrix.length) {
        for (let j = 0; j < matrix[i].length; j++) {

            if (matrix[j][i] === 0) {
                for (let k = 0; k < matrix.length; k++) {
                    matrix[k].splice(i, 1);
                }
                break;
            }
        }
        return deleteColumnWithZero(matrix, ++i);
    }
    return matrix;
};