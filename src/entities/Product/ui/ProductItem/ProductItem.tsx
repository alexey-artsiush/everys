import React from "react";
import { IProductItem } from "@/entities/Product/model/types/productTypes";
import classes from "./ProductItem.module.scss";
import { useMediaQuery } from "react-responsive";

const ProductItem = (props: IProductItem) => {
  const { code, title, manufacturer, description, price, stock } = props;
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 990px)" });

  return (
    <>
      {isTabletOrMobile ? (
        <div className={classes.productCardMobile}>
          {code} &nbsp; <b>{title} |</b> {` ${manufacturer} ${description}`}
          <p>
            {price} | {stock}
          </p>
        </div>
      ) : (
        <div className={classes.productCard}>
          <div className={classes.code}>{code}</div>
          <div className={classes.title}>{title}</div>
          <div className={classes.manufacturer}>{manufacturer}</div>
          <div className={classes.description}>{description}</div>
          <div className={classes.price}>{price}</div>
          <div className={classes.stock}>{stock}</div>
        </div>
      )}
    </>
  );
};

export default ProductItem;
