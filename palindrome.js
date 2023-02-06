/* var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    let string = x.toString();
    let arrFrwrd = string.split('');
    let arrRvrsd =[];
    let bool = true;
    for(let i = arrFrwrd.length - 1; i >= 0; i--) {
        arrRvrsd.push(arrFrwrd[i]);
    } 
    for (let i = 0; i < arrFrwrd.length -1; i++) {
        //console.log(arrFrwrd[i], arrRvrsd[i])
        if (arrFrwrd[i] !== arrRvrsd[i]) {
            bool = false;
            break;
        }
        if (i === arrFrwrd.length - 1 && bool) {
            return true;
        }
    }
    return bool
}; */

var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    let str = x.toString();
    for (let i = 0; i < str.length; i++) {
        for (let j = str.length - i - 1; j >= 0; j--) {
            if (str.charAt(j) !== str.charAt(i)) {
                return false;
            }
            break;
        }
    }
    return true;
}; 

console.log(isPalindrome(12121))