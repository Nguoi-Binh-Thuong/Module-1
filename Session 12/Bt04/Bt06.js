let sum = 0;
for (let i = 7; i <= 7*30;) {
    if (i % 7 === 0) {
        sum += i;
        i = i + 7;  
    }
}
console.log(sum);