//! 1-masala

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// const withGrades = students.map((s) => ({
//   ...s,
//   grade: s.percent >= 85 ? 5 : s.percent >= 70 ? 4 : s.percent >= 60 ? 3 : 2,
// }));

// const getNamesByGrade = (arr, g) =>
//   arr
//     .filter(
//       (s) =>
//         (s.percent >= 85 && g === 5) ||
//         (s.percent >= 70 && s.percent < 85 && g === 4) ||
//         (s.percent >= 60 && s.percent < 70 && g === 3)
//     )
//     .map((s) => s.name);

// console.log(withGrades);
// console.log(getNamesByGrade(students, 5));


//! 2-masala

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];
// const counts = animals.reduce((a, c) => ({ ...a, [c]: (a[c] || 0) + 1 }), {});
// console.log(counts);

//! 3-masala

// const nums1 = [1, 2, 3, 4, 5];
// const squares = nums1.map((n) => n ** 2);
// console.log(squares);


//! 4-masala

// const nums2 = [1, -4, 12, 0, -3, 29, -150];
// const sumPos = nums2.filter(Boolean).reduce((s, n) => (n > 0 ? s + n : s), 0);
// console.log(sumPos);


//! 5-masala

// const str = "George Raymond Richard Martin";
// const initials = str
//   .split(" ")
//   .map((w) => w[0])
//   .join("");
// console.log(initials);


//! 6-masala

// const people = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];
// const ages = people.map((p) => p.age);
// console.log(Math.max(...ages) - Math.min(...ages));


//! 7-masala

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const evens = arr.filter((n) => !(n % 2));
// const odds = arr.filter((n) => n % 2);
// console.log({ evens, odds });


//! 8-masala

// const arr2 = [1, 2, 2, 3, 4, 4, 5, 6, 6];
// const unique = arr2.filter((v, i, a) => a.indexOf(v) === i);
// console.log(unique);


//! 9-masala
// let products = [
//   { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20 },
//   { id: 2, name: "Acer", price: 10000, rating: 4.3, discount: 10 },
//   { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
//   { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 30 },
//   { id: 5, name: "Dell", price: 35000, rating: 4.9, discount: 30 },
// ];
// console.log([...products].sort((a, b) => a.id - b.id));
// console.log([...products].sort((a, b) => a.name.localeCompare(b.name)));
// console.log([...products].sort((a, b) => a.price - b.price));
// console.log([...products].sort((a, b) => a.rating - b.rating));
// console.log([...products].sort((a, b) => a.discount - b.discount));


//! 10-masala

// console.log(products.reduce((max, p) => (p.rating > max.rating ? p : max)));


//! 11-masala
// console.log(products.reduce((min, p) => (p.price < min.price ? p : min)));


//! 12-masala

// console.log(products.reduce((s, p) => s + p.price, 0));


//! 13-masala

// console.log(products.map((p) => p.name));

//! 14-masala

// console.log(products.find((p) => p.id === 5).name);


//! 15-masala

// console.log(products.filter((p) => p.id !== 4));


//! 16-masala

// const s1 = "HelloWorld";
// console.log([...s1].every((ch) => /[a-zA-Z]/.test(ch)));


//! 17-masala

// function getTruthyFalsy(arr) {
//   return { truthy: arr.filter(Boolean), falsy: arr.filter((x) => !x) };
// }
// console.log(getTruthyFalsy([false, 1, 10, "", null, "abdulaziz", 1.13, 0]));


//! 18-masala

// const s2 = "Men Abdulaziz Programmerman";
// console.log(s2.split(" ").map((w) => w.length));


//! 19-masala

// console.log("Men Abdulaziz Programmerman".includes(" "));

//! 20-masala

// const obj = { a: 2, b: 5, c: 7 };
// console.log(Object.entries(obj).map(([k, v]) => `${k}${v}`));


//! 21-masala

// function digitSum(n) {
//   return n < 10 ? n : (n % 10) + digitSum(Math.floor(n / 10));
// }
// console.log(digitSum(12345));

