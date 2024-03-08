import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const routers = [
  { path: "/", Element: MainPage },

  { path: "*", Element: NotFoundPage },
];
