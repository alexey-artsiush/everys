import React from "react";
import ProductList from "@/entities/Product/ui/ProductList/ProductList";
import classes from "./ProductTable.module.scss";

const ProductTable = () => {
  return (
    <div className={classes.table}>
      <div className={classes.tableHeader}>
        <div className={classes.code}>Code</div>
        <div className={classes.title}>Title</div>
        <div className={classes.manufacturer}>Manufacturer</div>
        <div className={classes.description}>Description</div>
        <div className={classes.price}>Price</div>
        <div className={classes.stock}>Stock</div>
      </div>
      <div className={classes.tableLine}></div>
      <div className={classes.tableBody}>
        <ProductList />
      </div>
    </div>
  );
};

export default ProductTable;
