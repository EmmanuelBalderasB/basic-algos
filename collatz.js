//Collatz Conjencture
const collatz = num => {
    let arr = [num]
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

    for (const j of arr) {
        console.log(j)
    }
}

console.log(collatz(137));