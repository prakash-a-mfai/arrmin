// program 1

var arr=[1,2,3,4,5]
for(let i=0 ;i<arr.length ;i++){
    var res= res+arr[i];
}
console.log(res)

//program 3
let arr1=[1,2,3]
let arr2=[4,5,6]
let total=arr1.concat(arr2)
console.log(total)

//program 4
let ar1=[1,2,3,4,5]
let ar2=[4,5,6,7,8]
let ar3;

// console.log(ar3)
    
//program 5
var str ="madam"
function palindrome(str){
if(str.reverse()===str){
    console.log("true");
}
else {
    console.log("false");
}
}