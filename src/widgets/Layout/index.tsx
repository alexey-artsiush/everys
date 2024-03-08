import React from "react";
import Header from "@/widgets/Layout/ui/Header/Header";
import Footer from "@/widgets/Layout/ui/Footer/Footer";
import classes from "./ui/layout.module.scss";

const appLayout = (PageComponent: () => JSX.Element, header = true, footer = true) =>
  function WithPage({ ...props }) {
    return (
      <div>
        {header && <Header />}
        <main className={classes.wrapper}>
          <PageComponent {...props} />
        </main>
        {footer && <Footer />}
      </div>
    );
  };

export default appLayout;
