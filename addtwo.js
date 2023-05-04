var addTwoNumbers = function(l1, l2) {
    let result = [];
    let remainder = 0;
    for (let i = 0; i < l1.length; i++) {
            console.log(remainder);
            if (remainder !== 0 && i >= l1.length) {
                result.push((l1[i] + l2[i]) + remainder);
            }
            if (remainder === 0 && (l1[i] + l2[i]) >= 10) {
                remainder = 1;
                result.push((l1[i] + l2[i]) - 10);
                continue;
            } else if (remainder !== 0 && (l1[i] + l2[i]) >= 10) {
                remainder = 1;
                result.push((l1[i] + l2[i]) - 10);
                continue;
            } else if (remainder !== 0 && (l1[i] + l2[i]) < 10) {
                result.push((l1[i] + l2[i]) + remainder)
                remainder = 0;
                continue;
            } else if (remainder === 0 && (l1[i] + l2[i]) < 10) {
                result.push(l1[i] + l2[i]);
                remainder = 0;
                continue;
            }
        }
        
        return result;
    };
    
    const a1 = [2,4,3];
    const a2 = [9,6,4];
    
    console.log(addTwoNumbers(a1,a2)); 