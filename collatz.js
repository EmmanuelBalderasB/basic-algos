//Collatz Conjencture
const collatz = num => {
    const randNum = Math.floor(Math.random() * 10000)
    let arr = [randNum];
    const logic = numb => {
        if (numb % 2 !== 0) {
            return (numb * 3) + 1
        } else {
            return numb / 2
        }
    }
    let i = 0;
    while(arr[i] !== 1) {
        arr.push(logic(arr[i]))
        i++
    }
    return arr;
}

console.log(collatz());
