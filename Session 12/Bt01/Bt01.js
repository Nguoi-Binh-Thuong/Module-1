let number_a = +prompt('Nhập vào số a:');
let number_b = +prompt('Nhập vào số b:');
if (number_a % number_b == 0){
    alert('Số '+number_a+' chia hết cho '+number_b);
} else {
    alert('Số '+number_a+' không chia hết cho '+number_b);
}
