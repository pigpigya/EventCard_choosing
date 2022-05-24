var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var i = arr.length;
var ranNum = arr.length;
function PickCard(){
    if (i == arr.length) {
        arr = wash(arr);
        i = 0;
        console.log("洗牌")
    }
    console.log(arr[i])
    i++;
}

function wash(arr){
    var ranNum = arr.length;
    var ranArr = [];
    for (var i = 0; i < ranNum; i++) {
    var ran = Math.floor(Math.random() * (arr.length - i));
    ranArr.push(arr[ran]);
    arr[ran] = arr[arr.length - i - 1];
    }
    return ranArr;
}
