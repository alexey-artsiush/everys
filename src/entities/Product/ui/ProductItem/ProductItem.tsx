import React from "react";
import { IProductItem } from "@/entities/Product/model/types/productTypes";
import classes from "./ProductItem.module.scss";

const ProductItem = (props: IProductItem) => {
  const { code, title, manufacturer, description, price, stock } = props;

  return (
    <div className={classes.productCard}>
      <div className={classes.code}>{code}</div>
      <div className={classes.title}>{title}</div>
      <div className={classes.manufacturer}>{manufacturer}</div>
      <div className={classes.description}>{description}</div>
      <div className={classes.price}>{price}</div>
      <div className={classes.stock}>{stock}</div>
    </div>
  );
};

export default ProductItem;
