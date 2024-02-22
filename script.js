"use strict";
// Getting dom
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const dayInput = document.querySelector(".input-day");
const monthInput = document.querySelector(".input-month");
const yearInput = document.querySelector(".input-year");
const daySpan = document.querySelector(".day-span");
const monthSpan = document.querySelector(".month-span");
const yearSpan = document.querySelector(".year-span");
const check = document.querySelector(".check");
const allInput = document.querySelectorAll(".input");
const dayOutput = document.querySelector(".day-value");
const monthOutput = document.querySelector(".month-value");
const yearOutput = document.querySelector(".year-value");
const presentYear = new Date().getFullYear();
const presentMonth = new Date().getMonth() + 1;
const presentDay = new Date().getDate();
let isValid = false;

// Functions
// Check valid day
const dayCheck = function () {
  const dayNumber = Number(dayInput.value);
  if (dayNumber > 31) {
    daySpan.classList.add("error-span");
    daySpan.textContent = "Must be a valid day";
    day.classList.add("error-text");
    allInput.forEach((input) => {
      input.classList.add("error-input");
    });
    isValid = false;
  } else if (dayNumber === 0) {
    daySpan.classList.add("error-span");
    daySpan.textContent = "This field cannot be empty";
    day.classList.add("error-text");
    allInput.forEach((input) => {
      input.classList.add("error-input");
    });
    isValid = false;
  } else if (Number(monthInput.value) === 2 && dayNumber > 28) {
    daySpan.classList.add("error-span");
    daySpan.textContent = "Must be a valid date";
    day.classList.add("error-text");
    allInput.forEach((input) => {
      input.classList.add("error-input");
    });
    isValid = false;
  } else if (
    (Number(monthInput.value) === 4 ||
      Number(monthInput.value) === 6 ||
      Number(monthInput.value) === 9 ||
      Number(monthInput.value) === 11) &&
    dayNumber > 30
  ) {
    daySpan.classList.add("error-span");
    daySpan.textContent = "Must be a valid date";
    day.classList.add("error-text");
    allInput.forEach((input) => {
      input.classList.add("error-input");
    });
    isValid = false;
  } else {
    daySpan.textContent = " ";
    day.classList.remove("error-text");
    monthSpan.textContent = " ";
    month.classList.remove("error-text");
    allInput.forEach((input) => {
      input.classList.remove("error-input");
    });
    isValid = true;
  }
};

// Check month valid
const monthCheck = function () {
  const monthNumber = Number(monthInput.value);
  if (monthNumber > 12) {
    monthSpan.classList.add("error-span");
    monthSpan.textContent = "Must be a valid day";
    month.classList.add("error-text");
    allInput.forEach((input) => {
      input.classList.add("error-input");
    });
    isValid = false;
  } else if (monthNumber === 0) {
    monthSpan.classList.add("error-span");
    monthSpan.textContent = "This field cannot be empty";
    month.classList.add("error-text");
    allInput.forEach((input) => {
      input.classList.add("error-input");
    });
    isValid = false;
  } else if (monthNumber === 2 && Number(dayInput.value) > 28) {
    monthSpan.textContent = " ";
    daySpan.classList.add("error-span");
    daySpan.textContent = "Must be a valid date";
    day.classList.add("error-text");
    allInput.forEach((input) => {
      input.classList.add("error-input");
    });
    isValid = false;
  } else if (
    (monthNumber === 4 ||
      monthNumber === 6 ||
      monthNumber === 9 ||
      monthNumber === 11) &&
    Number(dayInput.value) > 30
  ) {
    monthSpan.textContent = " ";
    daySpan.classList.add("error-span");
    daySpan.textContent = "Must be a valid date";
    day.classList.add("error-text");
    allInput.forEach((input) => {
      input.classList.add("error-input");
    });
    isValid = false;
  } else {
    day.classList.remove("error-text");
    daySpan.textContent = " ";
    monthSpan.textContent = " ";
    month.classList.remove("error-text");
    allInput.forEach((input) => {
      input.classList.remove("error-input");
    });
    isValid = true;
  }
};

// check year valid
const yearCheck = function () {
  const yearNumber = Number(yearInput.value);
  if (yearNumber > presentYear) {
    yearSpan.classList.add("error-span");
    yearSpan.textContent = "Must be in the past";
    year.classList.add("error-text");
    allInput.forEach((input) => {
      input.classList.add("error-input");
    });
    isValid = false;
  } else if (yearNumber === 0) {
    yearSpan.classList.add("error-span");
    yearSpan.textContent = "This field cannot be empty";
    year.classList.add("error-text");
    allInput.forEach((input) => {
      input.classList.add("error-input");
    });
    isValid = false;
  } else {
    year.classList.remove("error-text");
    yearSpan.textContent = " ";
    allInput.forEach((input) => {
      input.classList.remove("error-input");
    });
    isValid = true;
  }
};
// Check valid date
const dateValid = function () {
  const dayNumber = Number(dayInput.value);
  const yearNumber = Number(yearInput.value);
  const monthNumber = Number(monthInput.value);
  if (
    (yearNumber === presentYear && monthNumber > presentMonth) ||
    (yearNumber === presentYear &&
      monthNumber > presentMonth &&
      dayNumber > presentDay) ||
    (yearNumber === presentYear &&
      monthNumber === presentMonth &&
      dayNumber > presentDay)
  ) {
    daySpan.textContent = "Invalid Date";
    monthSpan.textContent = "Invalid Date";
    yearSpan.textContent = "Invalid Date";
    day.classList.add("error-text");
    month.classList.add("error-text");
    year.classList.add("error-text");
    daySpan.classList.add("error-text");
    monthSpan.classList.add("error-text");
    yearSpan.classList.add("error-text");
    allInput.forEach((input) => {
      input.classList.add("error-input");
    });
    isValid = false;
  } else {
    daySpan.textContent = " ";
    monthSpan.textContent = " ";
    yearSpan.textContent = " ";
    day.classList.remove("error-text");
    month.classList.remove("error-text");
    year.classList.remove("error-text");
    allInput.forEach((input) => {
      input.classList.remove("error-input");
    });
    isValid = true;
  }
};
// check age
const calcAge = function () {
  if (isValid) {
    const birthDate = `${monthInput.value}/${dayInput.value}/${yearInput.value}`;
    console.log(birthDate);
    const newBirthDate = new Date(birthDate);
    console.log(newBirthDate);
    const ageDiff = Date.now() - newBirthDate;
    console.log(ageDiff);
    const ageDate = new Date(ageDiff);
    console.log(ageDate);
    const ageDay = ageDate.getDay() - 1;
    console.log(ageDay);
    const ageMonth = ageDate.getMonth();
    console.log(ageMonth);
    const ageYear = ageDate.getFullYear() - 1970;
    console.log(ageYear);
    dayOutput.textContent = ageDay;
    monthOutput.textContent = ageMonth;
    yearOutput.textContent = ageYear;
  } else {
    dayOutput.textContent = "- -";
    monthOutput.textContent = "- -";
    yearOutput.textContent = "- -";
  }
};
// Event listeners
dayInput.addEventListener("input", dayCheck);
monthInput.addEventListener("input", monthCheck);
yearInput.addEventListener("input", yearCheck);
dayInput.addEventListener("input", dateValid);
monthInput.addEventListener("input", dateValid);
yearInput.addEventListener("input", dateValid);
check.addEventListener("click", calcAge);
