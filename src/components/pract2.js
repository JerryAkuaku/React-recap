function rectangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (i != 1 && i != n && j != 1 && j != n) {
        row += " ";
      } else {
        row += "*";
      }
    }
    console.log(row);
  }
}

rectangle(6);

function diamond(n) {
  let count = 0;
  let antCount = n;
  let row = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; i++) {
      if (i || i == n - antCount) {
      }
    }
  }
}

function lengthOfLongestSubstring(s) {
  let i = 0;
  let j = 0;
  let longest = 0;
  let altS = [...s];
  let tempArr = [];
  let length = 0;
  while (j < s.length) {
    if (!tempArr.includes(altS[j])) {
      tempArr.push(altS[j]);
      length = tempArr.length;
      j++;
    } else {
      length > longest ? (longest = length) : null;
      altS.splice(i, 1);
      tempArr.splice(i, 1);
    }
  }

  return longest;
}
console.log(lengthOfLongestSubstring("bbbbb"));

function maxArray(arr) {
  let i = 0;
  let max = 0;
  // let sum = 0;

  for (let j = 1; j < arr.length; j++) {
    let sum = arr[i] + arr[j];
    max < sum ? (max = sum) : null;
    i++;
  }
  return max;
}

console.log(maxArray([3, 9, 9, 3, 4, 9, 0, 3]));

function containsCloseNums(arr, k) {
  let isClose = false;
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == arr[j] && Math.abs(i - j) <= k) {
        isClose = true;
      }
    }
  }
  return isClose;
}
console.log(containsCloseNums([3, 2, 9, 6, 4, 5, 0], 6));
