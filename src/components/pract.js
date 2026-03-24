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
