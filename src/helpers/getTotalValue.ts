import { ProductModel } from '@/models/Product';

export const getTotalValue = (arr: ProductModel[]) => {
	if (arr.length > 0) {
		return arr.reduce((acc, cur) => acc + cur.price, 0);
	} else {
		return 0;
	}
};
