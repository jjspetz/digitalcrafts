/* The Problem

Compare and update the inventory stored in a 2D array against a second 2D array
of a fresh delivery. Update the current existing inventory item quantities
(in arr1). If an item cannot be found, add the new item and quantity into the
inventory array. The returned inventory array should be in alphabetical order
by item.

***********/

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!

    // looks for matching items and adds values together
    for (var i=0; i<arr2.length; i++) {
      arr1.forEach(function(item) {
        if (arr2[i][1] == item[1]) {
          item[0] += arr2[i][0];
          arr2.splice(i, 1);
        }
      });
    }

    // pushes new items into the array
    for (i=0; i<arr2.length; i++) {
       arr1.push(arr2[i]);
    }

    // sorts alphabetically and returns
    arr1 = arr1.sort(function(a, b) {
      if (a[1] < b[1]) return -1;
      if (a[1] > b[1]) return 1;
      return 0;
    });
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
