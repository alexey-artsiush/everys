import React from "react";
import ProductList from "@/entities/Product/ui/ProductList/ProductList";
import { useMediaQuery } from "react-responsive";
import classes from "./ProductTable.module.scss";

const ProductTable = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 990px)" });

  return (
    <div className={classes.table}>
      {isTabletOrMobile ? (
        <div className={classes.tableHeaderMobile}>
          <span>Code / Title / Manufacturer / Description / Price / Stock</span>
        </div>
      ) : (
        <div className={classes.tableHeader}>
          <div className={classes.code}>Code</div>
          <div className={classes.title}>Title</div>
          <div className={classes.manufacturer}>Manufacturer</div>
          <div className={classes.description}>Description</div>
          <div className={classes.price}>Price</div>
          <div className={classes.stock}>Stock</div>
        </div>
      )}

      <div className={classes.tableLine}></div>
      <div className={classes.tableBody}>
        <ProductList />
      </div>
    </div>
  );
};

export default ProductTable;
