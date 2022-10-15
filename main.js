function titleCase(str) {
    const arr = str.split(' ');                             //Make an array in which each word in str is a separate index
    let uppCase = []                                        //init empty array
    for (const word of arr) {                               //iterate through each item of arr
      let i = word.slice(0, 1).toUpperCase();               //first character of each item selected and upper cased, saved to i variable
      let j = word.slice(1).toLowerCase();                  //every character except first one is selected and lower cased, saved to j variable
      uppCase.push(i + j)                                   //push variables into empty array per iteration
      
    }
    const result = uppCase.join(' ');                       //separate result array back into a string
    return result;
  }
console.log(titleCase("sHoRt AnD sToUt"));
for (let i = 0; i < 10; i++) {
    console.time()
    function frankenSplice(arr1, arr2, n) {
        let result = arr2.slice()
        for (let i = 0; i < arr1.length; i++) {
            result.splice(n + i,0,arr1[i])
        }
        //result.splice(n,0,arr)
        return result;
}
    
    console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
    console.timeEnd()

}

function bouncer(arr) {
    let result = [];
    for (const i of arr) {
      switch (i) {
      case false:
          arr.splice(i,1)
          break;
      case null:
          arr.splice(i,1)
          break;
      case 0:
          arr.splice(i,1)
          break;
      case NaN:
          arr.splice(i,1)
          break;
      case undefined:
          arr.splice(i,1)
          break;
      case "":
          arr.splice(i,1)
          break;
      default:
          result.push(i)
          break;
  }
    }
    return result;
  };
  
  console.log(bouncer([7, "ate", "", false, 9]));