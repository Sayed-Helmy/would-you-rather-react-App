import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { FaHome } from "react-icons/fa";
import { RiChatNewLine } from "react-icons/ri";
import { MdOutlineWhatshot } from "react-icons/md";
import LoginUser from "./LoginUser";
import UserProfile from "../users/UserProfile";

const MainNavigation = ({ authUser }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h1>
          <span>Would You</span> Rather!
        </h1>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/home" activeClassName={classes.active}>
              <FaHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-question" activeClassName={classes.active}>
              <RiChatNewLine />
              <span>New Question</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/leader-board" activeClassName={classes.active}>
              <MdOutlineWhatshot />
              <span>Leader Board</span>
            </NavLink>
          </li>
        </ul>
        <div>
          {authUser && <LoginUser authUser={authUser} onClick={setShowMenu} />}
        </div>
        {showMenu && authUser && (
          <UserProfile authUser={authUser} onClick={setShowMenu} />
        )}
      </nav>
    </header>
  );
};

export default MainNavigation;
