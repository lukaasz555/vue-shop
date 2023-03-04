import { createStore } from 'vuex';
import { ProductModel } from '@/models/Product';

interface StateData {
	productsInCart: ProductModel[];
}

export const store = createStore({
	state(): StateData {
		return {
			productsInCart: [],
		};
	},
	mutations: {
		ADD_PRODUCT(state: StateData, product: ProductModel) {
			state.productsInCart.push(product);
		},
	},
	getters: {
		productsInCart: (state) => state.productsInCart,
		cartQty: (state) => state.productsInCart.length,
	},
});
