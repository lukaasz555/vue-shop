import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ProductModel } from '@/models/Product';

interface State {
	products: ProductModel[];
}

const getID = (arr: ProductModel[], id: string) => {};

export const useCartStore = defineStore('cart', {
	state: (): State => {
		return {
			products: [],
		};
	},
	getters: {
		itemsQty: (state) => state.products.length,
	},
	actions: {
		addToCart(item: ProductModel) {
			this.products.push(item);
		},
		removeFromCart(id: string) {
			const idx = this.products.findIndex((el) => el.id === id);
			this.products.splice(idx, 1);
		},
		$resetCart() {
			this.products = [];
		},
	},
});
