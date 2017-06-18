/* The Problem

  Design a cash register drawer function checkCashRegister() that accepts purchase
  price as the first argument (price), payment as the second argument (cash), and
  cash-in-drawer (cid) as the third argument.

  cid is a 2D array listing available currency.

  Return the string "Insufficient Funds" if cash-in-drawer is less than the change
  due. Return the string "Closed" if cash-in-drawer is equal to the change due.

  Otherwise, return change in coin and bills, sorted in highest to lowest order.
************/

function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var till = 0;
  var changeAvialable = 0;
  var changeArray = [];
  var tillLeft, moneyType, tmp;

  // money dictionary
  var money = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  };

  // calculates till amount
  cid.forEach(function(item) {
    till += item[1];
  });

  if (change < till) {
    for(var i = cid.length-1; i >= 0; i--) {
      console.log(money[cid[i][0]]);
      if (money[cid[i][0]] <= change) {
        tillLeft = cid[i][1];
        moneyType = money[cid[i][0]];
        tmp = 0;
        while (tillLeft > 0 && change - moneyType > -0.01) {
          tmp += moneyType;
          tillLeft -= moneyType;
          change -= moneyType;
        }
        if (tmp > 0)
          changeArray.push([cid[i][0], tmp]);
      }
    }

    changeArray.forEach(function(item) {
      changeAvialable += item[1];
    });
    if (changeAvialable > change) {
      return changeArray;
    } else {
      return 'Insufficient Funds';
    }
  }
  else if (change == till) {
    return 'Closed';
  } else {
    return 'Insufficient Funds';
  }
}
