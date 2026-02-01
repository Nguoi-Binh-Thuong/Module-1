let n1 = 0;
let n2 = 1;
let nn = n1 + n2;
let number;
while (true) {
    nn = n1 + n2;
    n1 = n2;
    n2 = nn;
    if (n1 % 5 === 0) {
        console.log(n1);
        break;
    }
}