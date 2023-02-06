function recursiveSearch(num, arr, start, end) {
    //Calculate middle point
    let mid = Math.floor((start + end) / 2);
    //If target is === to middle point, return
    if (num === arr[mid]) {
        console.log(`Found at index ${arr[mid]}`);
        return arr[mid];
    }

    if (num < arr[mid]) {
        console.log(`searchig left of ${arr[mid]}`);
        return search(num, arr, start, mid - 1);
    } else if (num > arr[mid]) {
        console.log(`searchig right of ${arr[mid]}`);
        return search(num, arr, mid + 1, end);
    }
}

function iterativeSearch(x, arr) {
    let start = 0;
    let end = arr.length - 1;
    if (start > end) {
        return -1
    }

    let mid = Math.floor((start + end) / 2);

    while (x !== arr[mid]) {
        if (x === arr[mid]) {
            console.log(`Found at index ${arr[mid]}`);
            return true;
        }

        if (x < arr[mid]) {
            console.log(`searchig left of ${arr[mid]}`);
            end = mid - 1;
        } else {
            console.log(`searchig right of ${arr[mid]}`);
            start = mid + 1;
        }
    }
}


let sorted = [];

for (let i = 1; i < 200; i++) {
    sorted.push(i);
}

recursiveSearch(39, sorted, 0, sorted.length);