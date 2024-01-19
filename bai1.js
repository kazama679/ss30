let arr = [1, 2, 3, 4, 3, 2, 1];//7      1, 2, 3, 4, 3, 2, 1
function check(array) {//                0  1  2  3  4  5  6
    let check=0;
    for (let i = 0; i < Math.floor(array.length/2); i++) {
        if(array[i]===array[array.length-i-1]){
            check++;
        }
    }
    if(check===Math.floor(array.length/2)){
        console.log("là hàm đối xứng");
    } else{
        console.log("là hàm ko đối xứng");
    }
}
check(arr);