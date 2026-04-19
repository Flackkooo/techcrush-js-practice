function formatName(firstName, lastName) {
  let trimmedFirst = firstName.trim();
  let trimmedLast = lastName.trim().toUpperCase();
  return `${trimmedLast}, ${trimmedFirst.charAt(0).toUpperCase()}${trimmedFirst.slice(1).toLowerCase()}`;
}
console.log(formatName(" philip ", " amobi "));
