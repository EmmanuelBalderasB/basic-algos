function maxProfitDays(stockPrices) {
	let min = { price: stockPrices[0], day: 0 };
	for (let i = 0; i < stockPrices.length; i++) {
		const index = stockPrices[i];
		if (index < min.price) {
			min.price = index;
			min.day = i;
		}
	}
	let max = { price: min.price, day: min.day };
	for (let i = min.day; i < stockPrices.length; i++) {
		const index = stockPrices[i];
		if (index > max.price) {
			max.price = index;
			max.day = i;
		}
	}
	return [min.day, max.day];
}

module.exports = maxProfitDays;
