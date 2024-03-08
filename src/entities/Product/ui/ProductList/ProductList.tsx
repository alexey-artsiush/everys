import React from "react";
import { useAppSelector } from "@/app/providers/storeProvider";
import { getProducts } from "@/entities/Product/model/selectors/getProducts";
import ProductItem from "@/entities/Product/ui/ProductItem/ProductItem";
import classes from "./ProductList.module.scss";

const ProductList: React.FC = () => {
  const { products, isLoading, isError } = useAppSelector(getProducts);

  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <p>Произошла ошибка загрузки данных</p>;

  return (
    <>
      {products &&
        // @ts-ignore
        products.map((product) => (
          <ProductItem
            key={product.code}
            code={product.code}
            title={product.title}
            manufacturer={product.manufacturer}
            description={product.description}
            price={product.price}
            stock={product.stock}
          />
        ))}
    </>
  );
};

export default ProductList;
