let n1 = 0;
let n2 = 1;
let nn = n1 + n2;
for (let i = 1; i<=20; i++){
    console.log(n1);
    nn = n1 + n2;
    n1 = n2;
    n2 = nn;
}