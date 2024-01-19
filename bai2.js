let n =+prompt("nhập n");
function check(number) {
    let result =0;
    for (let i = 0; i <= n; i++) {
        if(result%2!==0 && i===n-1){
            break;
        } else if(i%2!==0){
            result+=i;
        }
    }
    console.log(result);
}
check(n);