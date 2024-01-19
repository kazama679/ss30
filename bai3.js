let index = prompt("Nhập vào một chuỗi:");
function sapxep(s) {
    let text = [];
    let numbers = [];
    let special = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char.match(/[a-z]/i)) {
            text.push(char);
        } else if (char.match(/[0-9]/)) {
            numbers.push(char);
        } else {
            special.push(char);
        }
    }
    return text.concat(numbers, special);
}
let end = sapxep(index);
console.log(end);