let number_a = +prompt('Nhập vào số đầu tiên:');
let number_b = +prompt('Nhập vào số thứ hai:');
let number_c = +prompt('Nhập vào số thứ ba:');
if (number_a >= number_b && number_a >= number_c) {
    console.log('Số '+number_a+' là số lớn nhất');
} else if (number_b >= number_a && number_b >= number_c){
    console.log('Số '+number_b+' là số lớn nhất');
} else{
    console.log('Số '+number_c+' là số lớn nhất');
}

