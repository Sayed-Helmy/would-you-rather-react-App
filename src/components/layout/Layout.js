import React, { Fragment, useEffect } from "react";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import SideBar from "./SideBar";
import { useSelector, useDispatch } from "react-redux";
import { usersActions } from "../../store/usersSlice";
import { questionsActions } from "../../store/questionsSlice";

const Layout = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(
      "https://would-u-rather-520f9-default-rtdb.europe-west1.firebasedatabase.app/.json"
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(usersActions.setUsers(data.users));
        dispatch(questionsActions.setQuestions(data.questions));
      });
  }, [dispatch]);
  const users = useSelector((state) => state.users);
  const authUser = Object.values(users.users).find(
    (user) => user.id === users.authUser
  );
  return (
    <Fragment>
      <MainNavigation authUser={authUser} />
      <main className={classes.main}>
        {users.authUser && <SideBar  authUser ={authUser}/>}
        {props.children}
      </main>
    </Fragment>
  );
};

export default Layout;
