import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Cookies, Delivered To You</h2>
      <p>
        Choose your favorite cookies from our broad selection
        and enjoy a delicious snack at home.
      </p>
      <p>
        All our cookies are baked with high-quality ingredients, just-in-time and
        of course by experienced bakers!
      </p>
    </section>
  );
};

export default MealsSummary;
