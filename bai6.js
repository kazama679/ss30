const arr = [4, 6, 3, 7];
let result =0;
let check =0;
let n=3;
for(let i=0; i<arr.length-n+1; i++){
    let subArr =[];
    for(let j=i; j<i+n; j++){
        subArr.push(arr[j]);
    }
    console.log(subArr);
}