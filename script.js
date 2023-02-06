const foods = {
    allowed: {
      proteins: ['Rib Eye', 'Chicken', 'Turkey', {fish: ['Salmon', 'Tuna']}, 'Eggs'],
      vegetables: ['Cauliflower', 'Lettuce', 'Broccoli', 'Carrot', 'Avocado'],
      dairy: [{milk: ['Almond', 'Coconut', 'Regular']}, {cheese: ['Gouda', 'Mozzarella', 'Feta', 'Parmesan']}, 'Yoghurt (sugar free)'],
      sweets: ['Strawberries']
  }
}

function checkIfIncluded(target) {
  // Convert the target value to lowercase for case-insensitive comparison
  const food = target.toLowerCase();
  // Get the "allowed" object from the "foods" object
  const object = foods.allowed;
  // Iterate over the keys in the "allowed" object
  for (const property in object) {
    // Iterate over the values in the array associated with the current key
    for (const i in object[property]) {
      // Check if the current value is an object
      if (typeof object[property][i] === "object") {
        // If it is an object, iterate over the keys and values in the nested object
        const j = object[property][i];
        for (const key in j) {
          for (const k of j[key]) {
            // Compare the current value to the target value
            if(food === k.toLowerCase()) {
              // If the values match, return true
              return true;
            }
          }
        }
      } else if (typeof object[property][i] === "string") { 
        // If the current value is a string, compare it to the target value
        if (food === object[property][i].toLowerCase()) {
          // If the values match, return true
          return true;
        }
      }
    }
  }
  // If the target value is not found, return false
  return false;
}



console.log(getAllowance('Chicken'));
console.log(getAllowance('Mozzarella'));