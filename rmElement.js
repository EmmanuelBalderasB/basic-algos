/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === undefined || nums[i] === val) {
			nums.splice(i, 1);
			i--;
		}
	}
	return nums;
};
let runtime = [];

for (let i = 0; i < 1000; i++) {
	const start = performance.now();
	removeElement([3, 2, 2, 3], 3);
	removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
	const end = performance.now();
	const timeElapsed = end - start;
	runtime.push(timeElapsed);
}

const getAverageRuntime = (arr) => {
	let k = 0;
	for (let i = 0; i < arr.length; i++) {
		k += arr[i];
	}
	return k / arr.length;
};

console.log(getAverageRuntime(runtime));
