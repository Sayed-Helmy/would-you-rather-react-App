import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { usersActions } from "../../store/usersSlice";
import classes from "./SigninForm.module.css";

const SigninForm = () => {
  const history = useHistory();
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState("");
  const onChangeHandler = (e) => {
    setSelectedUser(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(usersActions.signin(selectedUser));
    if (location === "/") {
      history.push("/home");
    } else {
      history.push(location);
    }
  };
  return (
    <div className={classes.signin}>
      <header>
        <h2>Sign in</h2>
      </header>
      <div className={classes.logo}>
        <h1>
          <span>Would You</span> Rather
        </h1>
      </div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="select-user">Select User</label>
          <select name="" id="select-user" onChange={onChangeHandler}>
            <option value={null}>Please Select A user</option>
            <option value="sarahedo">Sarah Edo</option>
            <option value="tylermcginnis">Tyler McGinnis</option>
            <option value="johndoe">John Doe</option>
          </select>
        </div>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SigninForm;
