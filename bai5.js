let input = prompt("Nhập vào một chuỗi:");
function chuHoa(s) {
    let text = s.split(' ');
    for (let i = 0; i < text.length; i++) {
        if (text[i].length > 1) {
            text[i] = text[i].slice(0, -1) + text[i].slice(-1).toUpperCase();
        }
    }
    return text.join(' ');
}
var result = chuHoa(input);
console.log(result);