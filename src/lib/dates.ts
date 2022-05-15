const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function formatDate(date = new Date()) {
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
