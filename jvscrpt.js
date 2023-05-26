"use strict";

// const num1 =+prompt("1ci ededi daxil edin")
// const num2 =+prompt("2ci ededi daxil edin")
// const emeliyyat = prompt("emeliyyat daxil edin")
// let result = 0;

// switch (emeliyyat) {
//     case "+":
//         result = num1 + num2;
//         break;
//     case "*":
//         result = num1 * num2;
//         break;

//     case "/":
//         result = num1 / num2;
//         break;
//     case "-":
//         result = num1 - num2;
//         break;
//     default:
//         break;
// }
// console.log (result)

// let Celsius = prompt("Enter a temperature in Celsius");
// let Fahrenheit = Celsius * (9/5) + 32;
// console.log("The temperature in Fahrenheit is: " + Fahrenheit);

// let first_number = parseFloat(prompt("Enter the first number"));
// let second_number = parseFloat(prompt("Enter the second number"));
// let third_number = parseFloat(prompt("Enter the third number"));
// let result = (first_number + second_number + third_number) / 3;

// console.log("The average result is: " + result);

// let usernumber = parseFloat (prompt('enter a number'));
// if (usernumber%2==0) {console.log('The number is even')

// } else {console.log('The number is odd')

// }

// let usernumber1 = parseFloat(prompt("Enter 1st number"));
// let usernumber2 = parseFloat(prompt("Enter 2nd number"));
// let usernumber3 = parseFloat(prompt("Enter 3rd number"));
// if (usernumber1>usernumber2&&usernumber3) {console.log("Maximum number is:" +usernumber1)}
//     if (usernumber2>usernumber1&&usernumber3) {console.log("Maximum number is:" +usernumber2)}
//     if (usernumber3>usernumber1&&usernumber2) {console.log("Maximum number is:" +usernumber3)

//     }

// let firstnumber = parseFloat(prompt('enter first number:'));
// let secondnumber = parseFloat(prompt('enter second number:'));
// let result = firstnumber+secondnumber;
// console.log(+result);

// let score = parseFloat(prompt('Enter your score'));
// if (score >= 90) {
//   console.log('Grade: A');
// } else if (score >= 80 && score <= 89) {
//   console.log('Grade: B');
// } else if (score >= 70 && score <= 79) {
//   console.log('Grade: C');
// } else if (score >= 60 && score <= 69) {
//   console.log('Grade: D');
// } else {
//   console.log('Grade: F');
// }

// let firstname = prompt("Adinizi daxil edin:");
// let surname = prompt("Soyadinizi daxil edin:");
// let score1 = parseFloat(prompt("1ci imtahan neticesini daxil edin:"));
// let score2 = parseFloat(prompt("2ci imtahan neticesini daxil edin:"));
// let score3 = parseFloat(prompt("3ci imtahan neticesini daxil edin:"));

// if (!score1) {
//     score1 = 51;
// }

// if (!score2) {
//     score2 = 51;
// }

// if (!score3) {
//     score3 = 51;
// }

// if (score1 < 0 || score1 > 100 || score2 < 0 || score2 > 100 || score3 < 0 || score3 > 100) {
//     console.log("Daxil edilen imtahan neticeleri 0-dan kiçik və ya 100-dən böyük ola bilməz.");

// }

// let average = (score1 + score2 + score3) / 3;
// console.log('Ad: ' + firstname);
// console.log('Familiya: ' + surname);
// console.log('avarage: ' + average);

// if (average>=81) {
//     console.log("Diplom isine dusur")

// } else {
//     console.log("Diplom isine dusmur")
// }

// const arr=[12,'name',true]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// let i = 0; let sum = 0
// while (i < 100) {
//   if (i%2==1){

//     sum = sum + i
//   }i++
// }
// console.log(sum)

// let number1 = Number(prompt("birinci ededi daxil edin"));
// let number2 = Number(prompt("ikinci ededi daxil edin"));

// let sum = 0
// for(let i = 0;i < number1; i++){
//   sum += number2
// }

// console.log(sum);

// for (let i=1 ; i<10; i++){
//   console.log(i);
// }

// let numberOfFilms = Number(prompt("сколько фильмов вы уже смотрели?"));
// let personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };
// let question1 = prompt("Один из последних просмотренный фильмов?");
// let question2 = prompt("На сколько оцените его?");

// personalMovieDB.movies[question1]=[question2]

// console.log(personalMovieDB);

// for (let i = 5; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 20; i >= 10; i--) {
//   if (i === 13) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let i=2;

//  while (i <= 16) {
//    if (i % 2 === 0) {
//      i++;
//      continue;
//    } else {
//      console.log(i);
//    }
//    i++;
//  }

//  const arrayOfNumbers = [];

//  for (let i = 5; i < 11; i++) {
//    arrayOfNumbers[i - 5] = i;
//  }

//  console.log(arrayOfNumbers);
//  return arrayOfNumbers;

// const rows = 5;
// let pattern = "";

// for (let i = 0; i < rows; i++) {
//   let row = "";

//   // Add spaces before the asterisks
//   for (let j = 0; j < rows - i - 1; j++) {
//     row += " ";
//   }

//   // Add asterisks for each row
//   for (let k = 0; k < 2 * i + 1; k++) {
//     row += "*";
//   }

//   pattern += row + "\n";
// }

// console.log(pattern);

// const usdcurr = 1.7;
// const eurocurr = 1.84;

// function convert (amount,curr) {
//   console.log(curr*amount);
// }

// convert(1,usdcurr)

// function sayHello(name) {
//   console.log("Hello " + name);
// }

// sayHello("Vugar");

// function qonsu(num) {
//   return[num-1, num , num+1];

// }
// console.log(qonsu(5));

// const obj = {
//   Anna : 500,
//   Alice : 800
// }

// console.log(obj.Alice);

// const arr = ['vugar','nurane','arif']
// console.log(arr[1]);

// const user = 'vugar';
// console.log(`salam  ${user}`);

// const user = 'vugar';
// console.log("salam " + user);

// let numberOfFilms = prompt("how many movies u seen?");
// let personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };
// let answer1 = prompt("Last movie you watched?");
// let answer2 = prompt("Rating of the last movie?");

// personalMovieDB.movies[answer1]=answer2;
// console.log(personalMovieDB);

// function showmessage(text) {
//     console.log(text);
// }

// showmessage('salam');

// let question = prompt("yasinizi daxil edin");
// if (question > 17) {
//   alert("Access granted");
// } else {
//   alert("Access denied");
// }

//tasks

// let V = +prompt("İkirəqəmli ədəd daxil edin");

// while (V < 100 || V > 999) {
//   V += 7;
// }

// console.log("Son dəyər: " + V);

// let N = +prompt("Rəqəm daxil edin");

// for (let i = 0; i < N; i++) {
//   console.log("I know how to use cycles");
// }

// for (let i = 100; i < 1000; i++) {
//   if (i % 10 === 0) {
//     console.log(i);
//   }
// }

// let sum = 0;

// for (let i = 10; i < 100; i++) {
//   if (i % 2 === 1) {
//     sum += i;
//   }
// }

// console.log("Cəm: " + sum);

// let bolunen = +prompt("Boluneni daxil edin");
// let sum = 0;

// for (let i = 100; i < 1000; i++) {
//   if (i % bolunen === 0) {
//     sum += i;
//   }
// }

// console.log("Cəm:", sum);

// const arr = ['D', 'A', 'B', 'Vugar', 'i'];
// const element = arr.sort()

// console.log(element);

// const arr = ['D', 'A', 'B', 'Vugar', 'i'];
// const element = arr.sort()

// console.log(arr.some((element)=>element ==='Vugar'));

// let arr = [46, 67, 78, 546, 6466];
// console.log(arr.filter(item => item < 100));

// let arr1 = [2, 4, 6, 8];

// let newArr = arr1.map((item) => item + 2);

// console.log(newArr);

// task1
// let numbers = [1, 5, -7, 3, -9, 4, -6, 2];

// let modNumbers = numbers.map((num) => {
//   if (num < 0) {
//     return -num;
//   } else {
//     return num * 2;
//   }
// });

// console.log(modNumbers);

// task3

// let names = ["Sam", "Alan", "Bill", "Adam", "Anna", "George"];

// let filteredNames = names.filter((name) => name.concat );

// console.log(filteredNames);

// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   color: {
//     border: "black",
//     bg: "red",
//   },
// };

// console.log(Object.keys(options).length);

// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`Property ${i} for ${options[key][i]}`);
//     }
//   } else {
//     console.log(`Property ${key} for ${options[key]}`);
//   }
// }

// delete options.name;

// console.log(options);

// const people = [
//   { firstname: "Vugar", age: 25, budget: 10000 },
//   { firstname: "Ali", age: 23, budget: 20000 },
//   { firstname: "Cingiz", age: 21, budget: 9000 },
// ];

// // for ( let pop of people){
// //     console.log(pop);
// // }

// // for ( let i = 0 ; i<people.length;i++){
// //     console.log(people[i]);
// // }

// people.forEach(person => console.log(person))

// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//     languages: ["ru", "eng"],
//     programmingLangs: {
//       js: "20%",
//       php: "10%",
//       html: "100%",
//     },
//     exp: "1 month",
//   },
//   showAgeAndLangs: function () {
//     const age = this.age;
//     const languages = this.skills.languages
//       .map((lang) => lang.toUpperCase())
//       .join(", ");
//     return `My age is ${age} and I know: ${languages}`;
//   },
// };

// console.log(personalPlanPeter.showAgeAndLangs());

// function showProgrammingLangs(plan) {
//   const programmingLangs = personalPlanPeter.skills.programmingLangs;

//   let output = "";

//   for (let lang in programmingLangs) {
//     if (programmingLangs.hasOwnProperty(lang)) {
//       output += `Язык ${lang} изучен на ${programmingLangs[lang]}. `;
//     }
//   }

//   console.log(output);
// }

// showProgrammingLangs(personalPlanPeter);

// function showExperience(plan) {
//   console.log(plan);
// }

// showExperience(personalPlanPeter.skills.exp);

// const family = ["Peter", "Ann", "Alex", "Linda"];

// function showFamily(arr) {
//   if (arr.length === 0) {
//     console.log("Семья пуста");
//   } else {
//     console.log("Семья состоит из: ", arr);
//   }
// }

// showFamily(family);

// const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

// function standardizeStrings(arr) {
//   arr.forEach((city) => {
//     console.log(city.toLowerCase());
//   });
// }

// standardizeStrings(favoriteCities);

// const someString = 'salam';

// function reverse(str) {
//   if (typeof str !== "string" || str === null || str === undefined) {
//     console.log("Ошибка!");
//   } else {
//    return str.split("").reverse().join("");
//   }
// }

// console.log(reverse(someString));

// const someString = "salam";

// function reverse(str) {
//   return str.split("").reverse().join("");

// }

// console.log(reverse(someString));

// Task 1-
// const string =
//   "Lorem ipsum is a placeholder text commonly used to lorem demonstrate the visual form of a document or a typeface without relying on meaningful lorem content.";

// function modified(sentence) {
//   const capitalizeSentence =
//     sentence.charAt(0).toUpperCase() + sentence.slice(1);

//     const replaced = capitalizeSentence.replace(/lorem/gi,"graphic");

//   return replaced;
// }

// console.log(modified(string));

// Task 2+

// const arr = [
//   "Black Sea",
//   "Caribbean Sea",
//   "North Sea",
//   "Baltic Sea",
//   "Red Sea",
// ];

// const modifiedseas = arr.map(arr =>arr.replace("Sea",""))
// console.log(modifiedseas);

// Task 4+

// const arr = [
//   { name: "miki", surname: "Jonatan", age: "21" },
//   { name: "miki", surname: "Jonatan", age: "21" },
//   { name: "miki", surname: "Jonatan", age: "21" },
// ];

// const capitalized = arr.map(obj =>({
//     name : obj.name.toUpperCase(),
//     surame : obj.surname.toUpperCase(),
//     age : parseFloat(obj.age)
// }

// ))

// console.log(capitalized);

// Task 5+

// let d1 = "2015-03-25"
// let d2 = "2015-06-25"
// let d3 = "2015-03-15"

// if (d1>d2 && d1>d3) {
//     console.log('d1 largest one');

// }
// else if(d2>d1 && d2>d3){
//     console.log("d2 largest one");
// }
// else if(d3>d1 && d3>d2){
//     console.log("d3 largest one");
// }

// Task 10

// const array = [
//   { person: { age: "29", salary: "300" } },
//   { person: { age: "19", salary: "400" } },
//   { person: { age: "9", salary: "500" } },
//   { person: { age: "18", salary: "600" } },
// ];

// function calculateTotalSalary(arr) {
//   let totalSalary = 0;

//   for (let i = 0; i < arr.length; i++) {
//     const age = parseInt(arr[i].person.age);

//     if (age > 18) {
//       const salary = parseInt(arr[i].person.salary);
//       totalSalary += salary;
//     }
//   }

//   return totalSalary;
// }

// const totalSalary = calculateTotalSalary(array);
// console.log(totalSalary); // Output: 900

// Task 11

// const fruits = [
//   "Apple",
//   "Banana",
//   "Strawberry",
//   "Banana",
//   "Mango",
//   "Cherry",
//   "Banana",
//   "Mango",
// ];

// const uniqueFruits = [...new Set(fruits)];

// console.log(uniqueFruits);

// task 12

// const demoData = {
//   data: [
//     {
//       period: "Month",
//       start_date: "2012-06",
//       end_date: "2012-07",
//       attributes: {},
//       measures: {
//         Visits: 1000000,
//       },
//       SubRows: [
//         {
//           country: "Albania",
//           measures: {
//             Visits: 50,
//             countryCode: "67",
//           },
//           SubRows: null,
//         },
//         {
//           country: "Germany",
//           measures: {
//             Visits: 300,
//             countryCode: "154",
//           },
//           SubRows: null,
//         },
//         {
//           country: "Azerbaijan",
//           measures: {
//             Visits: 100,
//             countryCode: "994",
//           },
//           SubRows: null,
//         },
//       ],
//     },
//   ],
// };

// const countrycodefind = demoData.data[0].SubRows.filter((item) => item.country === "Azerbaijan"
// );
// console.log(countrycodefind);

// const info = {
//   firstname: "Vugar",
//   surname: "Mammadov",
//   birthdate: prompt("Enter birthdate: "),
//   age: function () {
//     return 2023 - parseInt(this.birthdate);
//   },
// };

// console.log(info.age());

// task-1

// let user = {
//     firstname:"Vugar",
//     gender: 'male',
//     birthdate: 1990
// }

// console.log(user.birthdate);

//task-2

// let user = {
//     firstname:"Vugar",
//     gender: 'male',
//     birthdate: 1990
// }

// user.age = 29;
// delete user.birthdate;
// console.log(user);

//task-4

// const obj = {
//   retirement: 65,
//   getYearsBeforeRetirement: function (age) {
//     return this.retirement - age;
//   },
// };

// console.log(obj.getYearsBeforeRetirement(40));


// class Product {
//   constructor(name, price, color) {
//     (this.Name = name), (this.Price = price), (this.color = color);
//   }
// }

// class Tv extends Product {
//   constructor(screenSize, brand, name,price, color) {
//     super(name,price, color);
//     (this.ScreeenSize = screenSize), (this.Brand = brand);
//   }
// }

// const tv = new Tv("108", "LG", 450, "black");
// console.log(tv);