const readline = require("readline");
const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout,
});
const pushArray = array => {
    let checkee = [];
    let index = [];
    //return new Promise((resolve) => {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < array.length; j++) {
                let space = array.charAt(j)
                if (space.charCodeAt() === 32) {
                    break;
                }
                if (i === 0) {
                    checkee.push(array.charAt(j))
                } else {
                    index.push(array.charAt(j + checkee.length + 1));
                }
            }
        }
        return [checkee, index];
    //})
    
}
const anagram = array => {
    let checkee = array[0].split('');
    let index = array[1].split('');
        let checked = [];
        for (let i = 0; i < index.length; i++) {
            for (let j = 0; j < checkee.length; j++) {
                if (index[i].toLowerCase() === checkee[j].toLowerCase()) {
                    checked.push(checkee[j]);
                    //console.log(checked)
                    break;
                }
        
            }
        }
  
        let result = checked.join('');
  
        //console.log(result);
        //console.log(array[1])
        let isAnagram = false;
        if (result.toLowerCase() === array[1].toLowerCase()) {
            isAnagram = true;
        } 
        if (isAnagram) {
            return `${array[0]} is an anagram of ${array[1]}. ${result}`
        } else {
            return `${array[0]} is not an anagram of ${array[1]}. Shared letters: ${result}`
        }
   
    
}

function anagram2(array) {
    let checkee = []
    let index = []

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < array.length; j++) {
            let space = array.charAt(j)
            if (space.charCodeAt() === 32) {
                break;
            }
            if (i === 0) {
                checkee.push(array.charAt(j))
            } else {
                index.push(array.charAt(j + checkee.length + 1));
            }
        }
    }

    //console.log(checkee);
    //console.log(index);
    let checked = [];
    
    for (let i = 0; i < index.length; i++) {
      for (let j = 0; j < checkee.length; j++) {
        if (index[i].toLowerCase() === checkee[j].toLowerCase()) {
          checked.push(checkee[j]);
          //console.log(checked)
          break;
        }
        
      }
    }
  
    let result = checked.join('');
  
    //console.log(result);
    //console.log(array[1])
    let isAnagram = false;
    if (result.toLowerCase() === index.join('').toLowerCase()) {
      isAnagram = true;
    } 
    if (isAnagram) {
        return `${checkee.join('')} is an anagram of ${index.join('')}. ${result}`
    } else {
        return `${checkee.join('')} is not an anagram of ${index.join('')}. Shared letters: ${result}`
    }
  }
rl.question("Enter desired words to be checked for anagram:", (answer) => {
    async function chain() {
        let value = await pushArray(answer);
        let second = await anagram(value);
        return second
    }
    console.log(chain())

    rl.close()
});





//console.log(anagram2("madeon daemon"));
//console.log(anagram(["Daemon", "Porters"]));