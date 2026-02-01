let number_a = +prompt('Giải phương trình ax^2 + bx + c = 0 \n Hãy nhập số a:');
let number_b = +prompt("Giải phương trình ax^2 + bx + c = 0 \n Hãy nhập số b:");
let number_c = +prompt("Giải phương trình ax^2 + bx + c = 0 \n Hãy nhập số c:");
let delta = Math.pow(number_b, 2) - 4 * number_a * number_c;
let x1 = ((-1 * number_b + Math.sqrt(delta)) / (2 * number_a));
let x2 = ((-1 * number_b - Math.sqrt(delta)) / (2 * number_a));
if (delta >= 0) {
    alert("x1 là " + x1 + "\nx2 là " + x2);
} else {
    alert('Phương trình vô nghiệm');
}