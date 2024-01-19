let arr= [2, 3, 5, 7, 8, 9, 10, 11, 12];
function ngto(array) {
    let check=0;
    let arrNgto =[];
    for(let i=0; i<array.length; i++){
        for(let j=2; j<array[i]; j++){
            if(array[i]%j===0){
                check++;
            }
        }   
        if(check===0){
            arrNgto.push(array[i]);
        }
        check=0;
    }
    console.log("Các số ngto trong mảng là:", arrNgto);
}
ngto(arr);