/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let sum = 0;
  let preNum = getValue(s.charAt(0));
  for (let i = 1; i < s.length; i++) {
    const num = getValue(s.charAt(i));
    if (num > preNum) {
      sum -= preNum;
    } else {
      sum += preNum;
    }
    preNum = num;
  }
  sum += preNum;
  return sum;
};

const getValue = (char) => {
  switch (char) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return 0;
  }
};
