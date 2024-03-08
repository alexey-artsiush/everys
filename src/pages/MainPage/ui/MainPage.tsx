import React, { useEffect } from "react";
import appLayout from "@/widgets/Layout";
import { useAppDispatch, useAppSelector } from "@/app/providers/storeProvider";
import { asyncGetProducts } from "@/entities/Product/model/services/asyncGetProducts";
import ProductTable from "@/entities/Product/ui/ProductTable/ProductTable";
import { SearchBar } from "@/features/SearchBar";
import { getFilterState } from "@/features/SearchBar/model/selectors/getFilterState";
import Pagination from "@/features/Pagination/ui/Pagination";

const MainPage: React.FC = appLayout(() => {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector(getFilterState);

  useEffect(() => {
    // @ts-ignore
    dispatch(asyncGetProducts(filter));
  }, []);

  return (
    <>
      <SearchBar />
      <ProductTable />
      <Pagination />
    </>
  );
});

export default MainPage;
