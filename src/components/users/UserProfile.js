import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { usersActions } from "../../store/usersSlice";
import classes from "./UserProfile.module.css";

const UserProfile = ({ authUser, onClick }) => {
  const profile = useRef();
  // const history = useHistory();
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(usersActions.signin(null));
    // history.replace("/");
  };
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (profile.current && !profile.current.contains(e.target)) {
        onClick(false);
      }
    });
  }, [profile, onClick]);

  return (
    <div className={classes.UserProfile} ref={profile}>
      <div className={classes["img-holder"]}>
        <img src={authUser.avatarURL} alt="" />
      </div>
      <div>{authUser.name}</div>
      <button onClick={onClickHandler}>LogOut</button>
    </div>
  );
};

export default UserProfile;
