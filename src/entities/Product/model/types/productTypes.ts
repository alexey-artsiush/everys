export interface IProductSchema {
  products: IProductItem[] | unknown;
  totalItems: number;
  isLoading: boolean;
  error: string | undefined;
  isError: boolean;
}

export interface IProductItem {
  code: string;
  title: string;
  manufacturer: string;
  description: string;
  price: string;
  stock: number;
}

export interface IAsyncGetProductResponseResult {
  result: {
    totalItems: number;
    items: IProductItem[];
    status: string;
    requestId: string;
  };
}
