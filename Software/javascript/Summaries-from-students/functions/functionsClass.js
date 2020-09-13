/** @format */

// // יש פונקוציות שמגיעות מראש:

// const answer = prompt("Whats your name?"); // פונקציה שגם נותנת הודעה וגם מקבלת תשובה
// alert("hello"); // פונקציה שרק נותנת הודעה

// שתי דרכים לבנות פונקציה

// דרך 1) להגדיר פונקציה:
// לקרוא לה בשם ולהחליט מה היא עושה
// function getAndGreet() {
//   const answer = prompt("Whats your name?");
//   alert("hello");
//   return answer;
// }

// // קריאה לפונקציה:
// const name = getAndGreet();
// console.log(name); // בקונסול יופיע השם שיירשמו בדף

// דרך 2)
//  פונקציה "אנונימית" שמשווים אותה למשתנה
// לא הגדרנו אותה מראש אלא השוונו אותה למשתנה:
// אם משתמשים בדרך הזאת - אי אפשר להשתמש בפונקציה לפני שהגדרנו אותה, כי המחשב לא מבצע הויסטינג עליה

// const getAndGreet = function() {
//     const answer = prompt("Whats your name?");
//     alert("hello");
//     return answer;
//   }

// קריאה לפונקציה:
//   const name = getAndGreet();
//   console.log(name)

// IIF - imidiatley invoked function:
// פונקציה שקוראים לה מיד באותה השורה
// היא "חד פעמית" כי לא הגדרנו לה שם ואין דרך לזמן אותה במצב אחר

// (function () {
//   const answer = prompt("Whats your name?");
//   alert("hello");
//   console.log(name);
// })(); // הסוגריים פה בסוף, ואלה שבהתחלה, הן אלא שהופכים אותה ל - IIF

// פונקציה שמחשבת ממוצע של הארראי
// להשתמש בקיצורי המקלדת כדי לבנות את הלולאה - קונטרול + אנטר

// function average(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (!Number.isInteger(arr[i])) {
//             throw 'Error, '${arr[i]}' is not an integer'; // throw - זורק ארור מבוקר אם התנאי מתקיים והולך לקאץ' אם היה כזה.
//         }
//     }

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// //  let ans = average([1,2,3,4,55]);
// //  console.log(ans);

// try {    // פה משיך כרגיל
// let ans = average([1,2,3,4,"blabla"])
// } catch(e) { // אם ישר ארור, הוא טופס את הארור זרקנו קודם, ושולח הודעה
//     console.error("found an error", e)
// }

// סוגי משתנים:

//.משתנים גלובלים: נהוג לרשום באותיות גדולות. אפשר לקרוא להם מבחוץ
// const DEFAULT = "hello" // שמים אותם מחוץ לסקופ

// משתנים פנימיים:
//  שמגדירים בתוך המערך. רוב המשתנים שאנחנו מגדירים בפונקציות וכו..

// ארגומנט: משתנה שהמערכת משלימה אותו מתוך הקריאה לפונקציה
// function (arr, length) - שני אלו הם ארגומנטים. אפשר לשנות אותם בתוך הפונקציה

// default parameter:
// אם לא נותנים לך את אחד המשתנים, להגדיר למה הוא יהיה שווה. לדוגמא:
// function average(brr, length = 3) //אם לא נתנו לנגט' - הפונקציה מגדירה אותו בתור 3. פעם היו עושים את זה עם משפט איף בתוך הפונקציה.

// optional parameter:
//  function myLog(a,b = 1, ...rest) { // הרסט פה הוא כל שאר המשתנים שיוסיפו לפונקציה
// console.log ("hi", {"first param": a}, {second param: b}, {rest}) // הגדיר אובייקט (ארראי) שמכיל את מה שיש ברסט

// *** פונקציה בגאווה-סקריפט היא First class citizen:
// כלומר אפשר להשתמש בהם כמו כל מערך. לאחסן באובייקט, לשים בנעלמים. הכל

// *** high-order function : פונקציה שמקבלת פונקציה

// function getUsername(message) {    // בונים פונקציה שמקבלת הודעה
//   const answer = prompt(message); // מוסיפים לה משתנה של תשובה - שהוא מה שהקלידו בפרומפט
//   return function () {
//     // הפונקציה הזו מחזירה פונקציה אנונימית חדשה  שעושה אלרט "שלום... " עם התשובה
//     alert("hello," + answer);
//   };
// }

// const func = getUsername("hi"); // קוראים לכל הפונקציה שהכנו בשם של משתנה
// func(); // קוראים לפונקציה

//  השתמשנו גם בפונקציה אנונימית, וגם הגדרנו פונקציה כנעלם וראינו שהיא יכולה לשמש כנעלם.
