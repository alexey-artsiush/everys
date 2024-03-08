import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/providers/storeProvider";
import { searchBarActions } from "@/features/SearchBar/model/slices/searchBarSlice";
import { getFilterState } from "@/features/SearchBar/model/selectors/getFilterState";
import { asyncGetProducts } from "@/entities/Product/model/services/asyncGetProducts";
import classes from "./SearchBar.module.scss";

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector(getFilterState);
  const handleSearch = () => {
    // @ts-ignore
    dispatch(asyncGetProducts(filter));
  };

  useEffect(() => {
    // @ts-ignore
    dispatch(asyncGetProducts(filter));
  }, [filter.Take]);

  return (
    <div className={classes.searchContainer}>
      <div className={classes.searchWrapper}>
        <div className={classes.inputLabel}>
          <label htmlFor="search" className={classes.label}>
            Поиск
          </label>
          <input
            className={classes.input}
            type="text"
            id="search"
            placeholder="Введите строку поиска"
            value={filter.Filter}
            onChange={(e) => dispatch(searchBarActions.setFilterText(e.target.value))}
          />
        </div>

        <div className={classes.inputLabel}>
          <label htmlFor="search-count" className={classes.label}>
            Кол-во
          </label>
          <input
            className={[classes.input, classes.count].join(" ")}
            type="number"
            id="search-count"
            placeholder="Введите количество результатов"
            value={filter.Take}
            onChange={(e) => dispatch(searchBarActions.setFilterTake(+e.target.value))}
          />
        </div>
      </div>

      <button className={classes.button} onClick={handleSearch}>
        Поиск
      </button>
    </div>
  );
};
