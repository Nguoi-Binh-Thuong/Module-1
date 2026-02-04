const Example = [10, 11, 21, 31, 41, 51, 61, 71, 81, 91];
let number = +prompt('Hãy nhập số của bạn:');
let answer = ""
for (let i = 0; i <= Example.length - 1; i++) {
    if (number === Example[i]) {
        answer = Example[i];
        break;
    }
}
if (number === answer) {
    console.log('Số ' + number + ' có trong danh sách, xin chúc mừng');
} else {
    console.log('Chúc bạn may mắn lần sau');
}
