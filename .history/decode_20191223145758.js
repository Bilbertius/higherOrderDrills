/* eslint-disable strict */
'use strict';

function decode(str) {
  const cipher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };

  let decodeLetter = cipher[str.charAt(0)];
  return str.charAt(decodeLetter);
}

function decodeWords(str) {
  let strArr = [];
  str.split(' ').forEach(word => {
    strArr.push(decode(word));
  });
  return strArr.join('');
}

console.log(decodeWords('blah blah dasd adsawsr gdsgf bartes ceaa'));
