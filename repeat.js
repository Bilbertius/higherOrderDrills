'use strict';
function hello() {
  return 'Hello world';
}

function goodbye() {
  return 'Goodbye world';
}

function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    console.log(fn());
  }
}

repeat(hello, 4);
