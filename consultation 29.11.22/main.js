let str = 'Привіт мене звати вова';
const capitalize = (str) => str.split(' ').map(value=>value[0].toUpperCase()+value.slice(1)).join(' ');

console.log(capitalize(str));

