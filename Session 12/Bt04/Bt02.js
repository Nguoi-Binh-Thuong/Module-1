while (true){
    let temperature = +prompt('Hãy nhập nhiệt độ của bạn:');
    if (temperature>100){
        console.log('Hãy giảm nhiệt độ của bạn');
    }else if (temperature<20){
        console.log('Hãy tăng nhiệt độ');
    }else {
        console.log('Oke bạn');
        break;
    }
}