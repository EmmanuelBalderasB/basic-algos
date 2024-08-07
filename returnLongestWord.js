
function findLongestWordLength(str) {
    let word = "";
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].includes("-") && arr[i].length > word.length) {
            word = arr[i];
        }
    }
    return word.length;
  }
  
  console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));