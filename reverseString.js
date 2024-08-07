function reverseString(str) {
    let reversed = [];
    for(let i = str.length; i >= 0; i--) {
      reversed.push(str.charAt(i));
    }
    return reversed.join('');
  }
  
  console.log(reverseString("hello"));
  console.log(reverseString("howdy"));
  console.log(reverseString("big apples are maybe there"));

