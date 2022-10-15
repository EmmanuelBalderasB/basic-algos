function getIndexToIns(arr, num) {
    let result = arr
    result.sort((a, b) => a - b)
    /*var numArr = new Float64Array(arr);
    result = numArr.sort()*/
    console.log(result)
    if (arr.length === 0) {
      return 0
    }
    for (let i = 0;i < result.length; i++) {
      if (num < result[0]) {
        return 0
      } else if ((num < result[i]) && (num > result[i - 1])) {
          return i;
      } else if (num === result[i]){
          return i;
      } else if (i === result.length - 1) {
          return i + 1;
      } else {
          continue;
      } 
    }
  }
  
  console.log(getIndexToIns([], 1));