function calculate_median(arr) {
    //请勿改动函数名
    var num = 0;
    var re;
    var data = [];
    for(var i=0; i<arr.length; i++) {
        if(arr[i] % 2 == 0) {
            num++;
            data.push(arr[i]);
        }
    }

    re =parseInt( num / 2);

    if(num % 2 != 0) {
        return data[re];
    }
    else {
        return (data[re] + data[re-1])/2
    }
}

module.exports = calculate_median;
