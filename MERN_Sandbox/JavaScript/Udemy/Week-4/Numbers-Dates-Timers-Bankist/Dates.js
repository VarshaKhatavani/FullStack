const now = new Date();
console.log(now); // Wed Apr 10 2024 11:35:57 GMT+0530 (India Standard Time)

console.log(new Date('Apr 10 2024 11:32:43 '));

console.log(new Date('2018-11-28T21:31:17.178Z')); // Thu Nov 29 2018 03:01:17 GMT+0530 (India Standard Time)

console.log(new Date(2024, 5, 20, 11, 11, 11)); // Thu Jun 20 2024 11:11:11 GMT+0530 (India Standard Time)

console.log(new Date(0)); // Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)

console.log(new Date(4 * 24 * 60 * 60 * 1000)); // Mon Jan 05 1970 05:30:00 GMT+0530 (India Standard Time)

// working with dates
const future = new Date(2024, 5, 20, 11, 11, 11);
console.log(future); // Thu Jun 20 2024 11:11:11 GMT+0530 (India Standard Time)

console.log('FullYear : ', future.getFullYear()); // 2024
console.log('Month : ', future.getMonth()); // 5
console.log('Date : ', future.getDate()); // 20
console.log('Day : ', future.getDay()); // 4
console.log('Hours : ', future.getHours()); // 11
console.log('Minutes : ', future.getMinutes()); // 11
console.log('Time : ', future.getTime()); // 1718862071000
console.log('Seconds : ', future.getSeconds()); // 11
console.log('ISO Strings : ', future.toISOString()); //  2024-06-20T05:41:11.000Z

// get date from milliseconds
console.log(new Date(1718862071000)); // Thu Jun 20 2024 11:11:11 GMT+0530 (India Standard Time)

console.log(Date.now()); // 1712733721216

console.log(new Date(Date.now())); // Wed Apr 10 2024 12:52:21 GMT+0530 (India Standard Time)

const calDaysPassed = (date1, date2) =>
  Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

const days1 = calDaysPassed(new Date(2024, 5, 15), Date.now());
console.log(days1);

const browser_locale = navigator.language;
console.log(browser_locale);

const opt = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  weekday: 'long',
};

const dte = new Intl.DateTimeFormat(browser_locale, opt).format(now);
console.log('formatted Date...', dte); // Sunday, April 14, 2024 at 12:33 PM
