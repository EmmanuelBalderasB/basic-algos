const sort = (arr) => {
    for (let i = 1; arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while(j >= 0 && j > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j+ 1] = current;
    }
}

const test = sort([3,7,4,1,8,6]);