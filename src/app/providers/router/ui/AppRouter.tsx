import React from "react";
import { Route, Routes } from "react-router-dom";
import { routers } from "@/app/providers/router/model/consts/router";

const AppRouter = () => {
  return (
    <Routes>
      {routers.map(({ path, Element, ...props }) => (
        <Route key={path} path={path} element={<Element {...props} />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
