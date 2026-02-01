let n1 = 0;
let n2 = 1;
let nn = n1 + n2;
let sum = 0;
for (let i = 1; i <= 20; i++) {
    sum = sum + n1;
    nn = n1 + n2;
    n1 = n2;
    n2 = nn;
}
console.log(sum);