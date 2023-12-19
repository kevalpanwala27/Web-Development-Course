function leapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
}
// console.log(leapYear(2000));
// console.log(leapYear(1900));
// console.log(leapYear(2020));
// console.log(leapYear(2021));
// console.log(leapYear(2024));
// console.log(leapYear(2028));
// console.log(leapYear(2032));
