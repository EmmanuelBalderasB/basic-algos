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
        return -1;
    }
    let found = false;

    while (!found) {
        let mid = Math.floor((start + end) / 2);
        if (x === arr[mid]) {
            console.log(`Found at index ${arr.indexOf(mid)}`);
            found = true;
            return true;
        }

        if (x < arr[mid]) {
            console.log(`searchig left of ${arr.indexOf(mid)}`);
            end = mid - 1;
        } else {
            console.log(`searchig right of ${arr.indexOf(mid)}`);
            start = mid + 1;
        }
    }
}

let sorted = [];

for (let i = 1; i < 200; i++) {
    sorted.push(i);
}

// recursiveSearch(39, sorted, 0, sorted.length);

// iterativeSearch(35, sorted);

/* const search = (target, arr, start, end) => {
    if (end < start) {
        return -1;
    }
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
        console.log(`Found at index ${arr[mid]}`);
        return arr[mid];
    } else if (arr[mid] > target) {
        console.log(`searchig left of ${arr[mid]}`)
        return search(target, arr, start, mid-1);
    } else if (arr[mid] < target) {
        console.log(`searchig right of ${arr[mid]}`);
        return search(target, arr, mid + 1, end);
    }
}

search(119, sorted, 0, sorted.length); */