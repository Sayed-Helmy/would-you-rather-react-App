import React from "react";
import classes from "./HomeNav.module.css";

const HomeNav = (props) => {
  const showUnanweredHandler = () => {
    props.showList(true);
  };
  const showAnsweredHandler = () => {
    props.showList(false);
  };
  return (
    <nav className={classes.homenav}>
      <ul>
        <li>
          <button
            className={props.mainList ? classes.active : ""}
            onClick={showUnanweredHandler}
          >
            Unanswered Questions
          </button>
        </li>
        <li>
          <button
            className={props.mainList ? "" : classes.active}
            onClick={showAnsweredHandler}
          >
            Answered Questions
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default HomeNav;
