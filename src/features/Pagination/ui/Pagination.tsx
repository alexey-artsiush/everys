import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/providers/storeProvider";
import { getProducts } from "@/entities/Product/model/selectors/getProducts";
import { getFilterState } from "@/features/SearchBar/model/selectors/getFilterState";
import { asyncGetProducts } from "@/entities/Product/model/services/asyncGetProducts";
import classes from "./Pagination.module.scss";

const Pagination = () => {
  const { totalItems } = useAppSelector(getProducts);
  const { filter } = useAppSelector(getFilterState);
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(totalItems / filter.Take);
  const dispatch = useAppDispatch();

  const skipItemsCount = currentPage * filter.Take;

  const handlePagePrev = () => {
    setCurrentPage((prev) => prev - 1);
    // @ts-ignore
    dispatch(asyncGetProducts({ ...filter, Skip: skipItemsCount }));
  };

  const handlePageNext = () => {
    setCurrentPage((prev) => prev + 1);
    // @ts-ignore
    dispatch(asyncGetProducts({ ...filter, Skip: skipItemsCount }));
  };

  return (
    <div className={classes.pagination}>
      <div>
        <span>{`Страница: ${currentPage} из ${pageCount}`}</span>
      </div>
      <div className={classes.buttons}>
        <button className={classes.button} disabled={currentPage === 1} onClick={handlePagePrev}>
          Предыдущая
        </button>
        <button className={classes.button} disabled={currentPage === pageCount} onClick={handlePageNext}>
          Следующая
        </button>
      </div>
    </div>
  );
};

export default Pagination;
