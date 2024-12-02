'use strict'
// Adan Asaad, Jana khlaily
const num = 123;

// בדיקה אם המספר מתחלק ב-2, 3 או 5
const divideBy2 = num % 2 === 0;
const divideBy3 = num % 3 === 0;
const divideBy5 = num % 5 === 0;

// חישוב התוצאה בעזרת פעולות לוגיות
const result = Number(divideBy2) + Number(divideBy3) + Number(divideBy5);

// הדפסת התוצאה
console.log(result);