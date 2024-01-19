const arr = [4, 6, 3, 8, 9, 7];
let input =+prompt("nhập số bky");
let result =0;
let check =0;
let n=3;
for(let i=0; i<arr.length-n+1; i++){
    let subArr =[];
    for(let j=i; j<i+n; j++){
        subArr.push(arr[j]);
        result += arr[j];
    }
    if(result===input){
        console.log(subArr);
        check++;
        console.log(input);
    } 
}
if(check===0){
    console.log("ko có mảng phù hợp");
}