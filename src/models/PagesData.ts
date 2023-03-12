import { ProductModel } from './Product';
export interface AlbumsPageData {
	isError: boolean;
	isLoading: boolean;
	products: ProductModel[] | [];
}

export interface ProductPageData {
	id: string;
	isLoading: boolean;
	isError: boolean;
	currentProduct: ProductModel;
}
