import classes from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <div className={classes.notFoundPage}>
      <h1 className={classes.title}>Страница не найдена</h1>
      <a className={classes.link} href={`${import.meta.env.REACT_APP_CLIENT}/`}>
        Вернуться на главную
      </a>
    </div>
  );
};

export default NotFoundPage;
