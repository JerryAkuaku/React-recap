function sum(a, b, c) {
  return a + b * c;
}
console.log(sum(4, 7));

function findLargest(arr) {
  let greater = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > greater) greater = arr[i];
  }
  return greater;
}

console.log(findLargest([3, 4, 9, 7, 54]));

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log("FizzBuzz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(17);

function countVowels(str) {
  const arr = [...str];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] == "a" ||
      arr[i] == "e" ||
      arr[i] == "i" ||
      arr[i] == "o" ||
      arr[i] == "u"
    ) {
      count += 1;
    }
  }
  return count;
}

console.log(countVowels("hecccufocu"));

function reverseString(str) {
  const arr = [...str];
  let result = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    result += arr[i];
  }
  return result;
}

console.log(reverseString("hello"));

function isPalindrome(str) {
  let arr = [...str];
  let palindrome = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      palindrome = false;
      break;
    }
  }
  return palindrome;
}

console.log(isPalindrome("klllk"));

function isPalindrome2(str) {
  let arr = [...str].reverse().join("");

  return arr === str;
}

console.log(isPalindrome2("adkuda"));

function findDuplicate(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr2.includes(arr[i])) {
      return arr[i];
    } else {
      arr2.push(arr[i]);
    }
  }
}

console.log(findDuplicate([1, 4, 3, 2, 4]));

function countOccurrences(arr) {
  let stor = {};
  for (let item of arr) {
    if (stor[item]) {
      stor[item]++;
    } else {
      stor[item] = 1;
    }
  }
  return stor;
}

console.log(countOccurrences(["f", "d", "g", "d", "w", "e", "r", "k", "l"]));

function groupBy(arr) {
  let stor = {};
  for (let i = 0; i < arr.length; i++) {
    if (stor[arr[i].city]) {
      stor[arr[i].city] = [...stor[arr[i].city], arr[i].name];
    } else {
      stor[arr[i].city] = [arr[i].name];
    }
  }
  return stor;
}

console.log(
  groupBy([
    { name: "Alice", city: "London" },
    { name: "Bob", city: "Paris" },
    { name: "Charlie", city: "London" },
    { name: "Diana", city: "Paris" },
    { name: "Eve", city: "Tokyo" },
  ]),
);

function groupByAge(arr) {
  let stor = { young: [], adult: [], senior: [] };
  for (let { age, name } of arr) {
    if (age < 0) {
      console.log("Undefined");
    } else if (age <= 20) {
      stor["young"].push(name);
    } else if (age <= 59) {
      stor["adult"].push(name);
    } else {
      stor["senior"].push(name);
    }
  }
  return stor;
}

console.log(
  groupByAge([
    { name: "Alice", age: 15 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 65 },
    { name: "Diana", age: 19 },
    { name: "Eve", age: 45 },
    { name: "Frank", age: 72 },
  ]),
);

function cartSummary(cart) {
  let totalItems = 0;
  let totalPrice = 0;
  let greatestPrice = 0;
  let mostExpensive = "";

  for (let { name, quantity, price } of cart) {
    totalItems += quantity;
    totalPrice += price * quantity;
    if (price > greatestPrice) {
      mostExpensive = name;
      greatestPrice = price;
    }
  }
  return {
    totalItems: totalItems,
    totalPrice: totalPrice,
    mostExpensive: mostExpensive,
    greatestPrice: greatestPrice,
  };
}

console.log(
  cartSummary([
    { name: "Shoes", price: 50, quantity: 2 },
    { name: "Hat", price: 20, quantity: 1 },
    { name: "Jacket", price: 120, quantity: 1 },
    { name: "Socks", price: 5, quantity: 3 },
  ]),
);

function arr(a, k) {
  let maxSum = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += a[i];
  }
  maxSum = sum;
  for (let i = k; i < a.length; i++) {
    sum += a[i] - a[i - k];
    sum > maxSum ? (maxSum = sum) : null;
  }
  return maxSum;
}

console.log(arr([3, 6, 4, 8, 6, 7], 3));

function smallestArray(a, k) {
  let sum = 0;
  let left = 0;
  let minLength = Infinity;
  for (let right = 0; right < a.length; right++) {
    sum += a[right];

    while (sum >= k) {
      let length = right - left + 1;

      minLength > length ? (minLength = length) : null;

      sum -= a[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(smallestArray([6, 5, 6, 2, 7, 4, 2], 18));

function largestArray(a, k) {
  let sum = 0;
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < a.length; right++) {
    sum += a[right];
    while (sum > k) {
      let length = right - left + 1;
      maxLength < length ? (maxLength = length) : null;
      sum -= a[left];
      left++;
    }
  }
  return maxLength;
}
console.log(largestArray([6, 5, 3, 2, 4, 2], 11));

function longestString(str) {
  let sum = [];
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < str.length; right++) {
    if (!sum.includes(str[right])) {
      sum.push(str[right]);
    } else {
      {
        let length = right - left + 1;
        maxLength < length ? (maxLength = length) : null;
        sum.splice(left, 1);
        left++;
      }
    }
  }
  return maxLength - 1;
}
console.log(longestString("abbasdew "));


function rectangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i != 1 || i != n &&j != 1 || j != n) {
        
          console.log("0");
        } else {
          console.log("1");
        }
      
      }
    }
  }
}

rectangle(3);
