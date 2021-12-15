import React from "react";
import classes from "./LoginUser.module.css";

const LoginUser = ({ authUser, onClick }) => {
  const onclickHandler = () => {
    onClick((state) => !state);
  };
  return (
    <button className={classes.LoginUser} onClick={onclickHandler}>
      <div className={classes["img-holder"]}>
        <img src={authUser.avatarURL} alt="" />
      </div>
      <div className={classes.username}>{authUser.name.split(" ")[0]}</div>
    </button>
  );
};

export default LoginUser;
