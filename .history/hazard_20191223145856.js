'use strict';
function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;

  return function (location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} at ${location}`);
    console.log(
      `The ${typeOfWarning} hazard alert has triggered ${warningCounter} time${
      warningCounter > 1 ? 's' : ''
      } today!`
    );
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road'


