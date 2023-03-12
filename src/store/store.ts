import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ProductModel } from '@/models/Product';

interface State {
	products: ProductModel[];
}

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
		removeFromCart(item: ProductModel) {
			this.products = this.products.filter((p) => p.id !== item.id);
		},
	},
});
