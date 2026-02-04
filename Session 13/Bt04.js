let number = prompt('Hãy nhập dãy số của bạn: ');
let numberArray = number.split('');
let sortArray = numberArray.sort();
console.log(sortArray[sortArray.length -1]);