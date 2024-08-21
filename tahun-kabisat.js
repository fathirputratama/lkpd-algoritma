function isLeapYear(year) {
  if (year % 400 === 0) {
      return true;
  } else if (year % 100 === 0) {
      return false;
  } else if (year % 4 === 0) {
      return true;
  } else {
      return false;
  }
}

function findLeapYears(startYear, endYear) {
  let leapYears = [];
  for (let year = startYear; year <= endYear; year++) {
      if (year === 1700 || year === 1800) {
          leapYears.push(`${year} bukan tahun kabisat`);
          continue; 
      }
      if (isLeapYear(year)) {
          leapYears.push(`${year} tahun kabisat`);
      }
  }
  return leapYears;
}

const leapYears = findLeapYears(1600, 2024);
console.log("Tahun kabisat dari 1600 sampai 2024 adalah: ", leapYears);