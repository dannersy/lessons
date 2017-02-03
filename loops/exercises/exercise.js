/*
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/

function average(arr){
  let sum = 0;
  const length = arr.length;
  for (let i = 0; i < length; i++){
    sum += arr[i];
  };
  return sum/length
};

function averageEach(arr){
  let sum = 0;
  arr.forEach((value) => sum += value);
  return sum/arr.length;
};


/*
    @func squareEach
    @param {array} arr
    @returns {array}
    @desc - square each value in array
    @example - squareEach([1,2,3,4]); // [1,4,9,16]
*/

function square(arr){
  const newArr = [];
  for (let i = 0; i < arr.length; i++){
    newArr[i] = arr[i] * arr[i];
  };
  return newArr
};

function squareEach(arr){
  const newArr = [];
  arr.forEach((value, i) => newArr[i] = value * value);
  return newArr
};


/*
    @func averageSquare
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and
            square each element
            find the average of the
            SQUARES of each element in this array
    @example -
        // turn [1,2,3,4] to [1,4,9,16]
        // then find the averate of the array to the right
        averageSquare([1,2,3,4); // 7.5
*/

function averageSquare(arr){
  let sum = 0;
  const length = arr.length;
  for (let i = 0; i < length; i++){
    sum += arr[i] * arr[i];
  };
  return sum/length
};

function averageSqEach(arr){
  let sum = 0;
  arr.forEach((value) => sum += value * value);
  return sum/arr.length;
};

/*
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/

function negateArr(arr){
  const newArr = [];
  for (let i = 0; i < arr.length; i++){
    newArr[i] = -arr[i];
  };
  return newArr
};

function negateArrEach(arr){
  const newArr = [];
  arr.forEach((value, i) => newArr[i] = -value);
  return newArr
};

/*
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/

function reverseArr(arr){
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--){
    newArr.push(arr[i])
  };
  return newArr
};
// You could also .reverse() but remember that it is destructive, ie change your original array

function reverseArrEach(arr){
  const newArr = [];
  arr.forEach((value, i) => newArr.unshift(arr[i]));
  return newArr
};

/*
    @func negateBackwards
    @param {array} arr
    @returns {array}
    @desc - reverse AND negate array
    @example
        negateBackwards([1,2,3,4]); // [-4, -3, -2, -1]
*/

function negateBackwards(arr){
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--){
    newArr.push(-arr[i])
  };
  return newArr
};

function negateBackwardsEach(arr){
  const newArr = [];
  arr.forEach((value, i) => newArr.unshift(-arr[i]));
  return newArr
};
