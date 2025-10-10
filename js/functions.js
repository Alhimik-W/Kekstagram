// Функция для проверки длины строки.

const checkLength = (string = '', maxLength = 1) => string.length <= maxLength;
console.log(checkLength('Функционал', 10));

// Функция для проверки. Является ли строка палиндромом?

const isPalindrome = (string = '') => {
  let reverseString = '';
  string = string.replaceAll(' ', '').toLowerCase();

  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }

  return string === reverseString;
};
console.log(isPalindrome('Лилипут сома на мосту пилил'));

// Функция извлечения цифр из переданной строки

const extractNumbers = (string = '') => {
  let result = '';

  for (let i = 0; i <= string.length - 1; i++) {
    if (Number.isNaN(parseInt(string[i], 10)) === false) {
      result += string[i];
    }
  }

  return result === '' ? NaN : Number(result);
};
console.log(extractNumbers('Мне 38'));


const isMeetingWork = (workStart, workEnd, meetingStart, meetingDuration) => {

  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);

    return hours * 60 + minutes;
  };

  const workStartMinutes = timeToMinutes(workStart);
  const workEndMinutes = timeToMinutes(workEnd);
  const meetingStartMinutes = timeToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  return meetingStartMinutes >= workStartMinutes && meetingEndMinutes <= workEndMinutes;
};

console.log(isMeetingWork('08:00', '17:30', '14:00', 90));
console.log(isMeetingWork('8:0', '10:0', '8:0', 120));
console.log(isMeetingWork('08:00', '14:30', '14:00', 90));
console.log(isMeetingWork('14:00', '17:30', '08:0', 90));
console.log(isMeetingWork('8:00', '17:30', '08:00', 900));
