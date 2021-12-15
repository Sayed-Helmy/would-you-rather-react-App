import React from "react";
import classes from "./SideBar.module.css";

const SideBar = ({ authUser }) => {
  return (
    <aside className={classes.sidebar}>
      <div className={classes.username}>
        <div className={classes["img-holder"]}>
          <img src={authUser.avatarURL} alt="" />
        </div>
        <span>{authUser.name}</span>
      </div>
      <div className={classes.scores}>
        <div>
          Answered Questions <span>{Object.keys(authUser.answers).length}</span>
        </div>
        <div>
          Created Questions <span>{authUser.questions.length}</span>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
