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
function getNumberDigits() {
    let cache = {};

    return function memo(number, result, index) {
        let numArr = number.toString().split('');
        index = index || 0;
        result = result || {};

        if (cache[number]) {
            return cache[number];
        }
        if (index < numArr.length) {
            result[numArr[index]] = ++result[numArr[index]] || 1;
            return memo(number, result, ++index)
        }
        cache[number] = result
        return cache[number];
    };
};

// task 4
function countUniqueWords() {
    let cache = {};

    return function memorize(string, wordsArray, counter, uniqWordsCounter) {
        wordsArray = wordsArray || string.split(/[\s.,]+/gi);
        uniqWordsCounter = uniqWordsCounter || 0;
        counter = counter || 0;

        if (cache[string]) {
            return cache[string];
        }

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
                return memorize(string, wordsArray, counter, ++uniqWordsCounter);
            }
        }
        cache[string] = uniqWordsCounter;
        return cache[string];
    };
};

// task 5
function getNumberWords() {
    let cache = {};
    return function memo(sentence, index, result) {
        let wordArr = sentence.split(' ');
        index = index || 0;
        result = result || {};

        if (cache[sentence]) {
            return cache[sentence];
        }
        if (index < numArr.length) {
            result[wordArr[index]] = ++result[wordArr[index]] || 1;
            memo(sentence, ++index, result);
        }
        cache[sentence] = result;
        return cache[sentence];
    }
};

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
function getSumOddEvenNum() {
    let cache = {};
    return function memo(array, result, index) {
        index = index || 0;
        result = result || 0;
        if (cache[array]) {
            return cache[array];
        }

        if (index < array.length) {
            if (array[index] > 0 && array[index] % 2 !== 0) {
                result += array[index];
            }
            return memo(array, result, ++index);
        }
        cache[array] = result;
        return cache[array];
    }
};

function getSumElements() {
    let cache = {};
    return function memo(array, result, index, х) {
        index = index || 0;
        result = result || 0;
        if (cache[array]) {
            return cache[array];
        }
        if (index < array.length) {
            if (array[index] % x === 0) {
                result += array[index];
            }
            return memo(array, result, ++index, х);
        }
        cache[array] = result;
        return cache[array];
    }
};

//task 10
function countNegativeNum() {
    let cache = {};
    return function memo(arr, index, count) {
        index = index || 0;
        count = count || 0;
        if (cache[arr]) {
            return cache[arr];
        }
        if (i < arr.length) {

            if (arr[index] < 0) {
                count++;
            }
            return memo(arr, ++index, count);
        }
        cache[arr] = count;
        return cache[arr];
    }
};

//task 11
function convertToBinary() {
    let cache = {};

    return function memo(num, binary, i) {
        binary = binary || [];
        index = index || 0;

        if (cache[num]) {
            return cache[num];
        }
        if (num > 0) {
            binary.unshift(num % 2);
            num = Math.floor(num / 2);
            return memo(num, binary, ++i);
        }
        cache[num] = binary.join('');
        return cache[num];
    };
};

function convertToDemention() {
    let cache = {};

    return function memo(number, num, sum, power, index) {
        num = num || number.toString().split('').reverse();
        sum = sum || 0;
        power = power || 0;
        index = index || 0;

        if (cache[number]) {
            console.log("from cache");
            return cache[number];
        }

        if (index < num.length) {
            num[index] = +num[index] * (2 ** power);
            sum += num[index];
            power++;
            return memo(number, num, sum, power, ++index);
        }
        cache[number] = sum;
        return cache[number];
    };
}

//task 15
function transposeMatrix() {
    let cache = {};

    return function memo(matrix, row, coll, result) {
        row = row || 0;
        coll = coll || 0;
        result = result || [];

        if (cache[matrix]) {
            return cache[matrix];
        }

        if (row < matrix.length) {
            if (typeof result[row] === "undefined") {
                result.push([]);
            }

            if (coll < matrix.length) {
                result[coll].push(matrix[coll][row]);
                return transposeMatrix(matrix, row, ++coll, result);
            }
            coll = 0;
            return memo(matrix, ++row, coll, result);
        }
        cache[matrix] = result;
        return cache[matrix];
    }
}

//task 16
function addTwoMatrix() {
    let cache = {};
    return function memo(matrix, matrix2, indexI, indexJ) {
        if (cache[matrix + matrix2]) {
            return cache[matrix + matrix2];
        }
        result = result || [];
        indexI = indexI || 0;
        indexJ = indexJ || 0;
        if (i < matrix.length) {
            if (j === matrix.length) {
                j = 0;
                return memo(matrix, matrix2, ++indexI, indexJ);
            } else {
                matrix[i][j] += matrix2[i][j];
                return memo(matrix, matrix2, indexI, ++indexJ);
            }
        } else {
            return cache[matrix + matrix2] = result;
        }
    }
}

//task 17 
function deleteMatrixWithZero() {
    let cache = {};

    return function memo(matrix, i, newMatrix) {
        index = index || 0;
        newMatrix = newMatrix || matrix;
        cache[0] = matrix;

        if (cache[newMatrix]) {
            return cache[matrix];
        }

        if (i < matrix.length) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === 0) {
                    matrix.splice(i, 1);
                    --i;
                    break;
                }
            }
            return memo(matrix, ++i, newMatrix);
        }
        cache[newMatrix] = matrix;
        return cache[newMatrix];
    };
};

function deleteColumnWithZero(matrix, i) {
    let cache = {};

    return function memo(matrix, i, newMatrix) {
        index = index || 0;

        if (cache[newMatrix]) {
            return cache[matrix];
        }

        if (i < matrix.length) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[j][i] === 0) {
                    for (let k = 0; k < matrix.length; k++) {
                        matrix[k].splice(i, 1);
                    }
                    break;
                }
            }
            return memo(matrix, ++i, newMatrix);
        }
        cache[newMatrix] = matrix;
        return cache[newMatrix];
    }
};