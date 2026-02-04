let number = prompt('Hãy nhập dãy số của bạn: ');
let numberArray = number.split('');
let sum = 0
for (let i = 0; i <= numberArray.length - 1; i++) {
    if (+numberArray[i] % 2 !== 0) {
        sum += Number(numberArray[i]);
    }
}
console.log(sum);
