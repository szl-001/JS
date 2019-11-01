var str="hello world"
str=str.toUpperCase()
alert(str)
console.log(str)

var xx="HELLO WORLD"
xx=xx.toLowerCase()
alert(xx)
console.log(xx)

function maopao(arr) {
    var i = arr.length, j;
    var change;
    while (i > 0) {
        for (j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                change = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = change;
            }
        }
        i--;
    }
    return arr;
}
 
var arr = [4, 2, 3, 9, 1, 5, 7, 6, 8];
var arrSorted = maopao(arr);
console.log(arrSorted);
alert(arrSorted);


function* flatten(arr) {
    for(let i = 0;i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            yield * flatten(arr[i])
        } else {
            yield arr[i]
        }
    }
}

console.log([...flatten([[1,2],3,[4,[5,[6]],7]])])


