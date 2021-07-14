const calculateChange = function(total, cash) {
  let change = cash - total;
  let dollars = {
    twentyDollar: 2000,
    tenDollar: 1000,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  };
  console.log(change);

  let properChange = {};

  for (let dollar in dollars) {
    let i = 0;
    while (true) {
      let remainingValue = change - dollars[dollar];
      if (remainingValue > 0) {
        change = remainingValue;
        properChange[dollar] = ++i;
      } else {
        break
      }
    }
  }
  return properChange
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
