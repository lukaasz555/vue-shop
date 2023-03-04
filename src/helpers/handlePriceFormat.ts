export const handlePriceFormat = (price: Number) => {
	return `${String(price.toFixed(2)).replace('.', ',')}zł`;
};
