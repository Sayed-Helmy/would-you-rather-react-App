import React from "react";
import classes from "./LeaderBoardUser.module.css";

const LeaderBoardUser = ({ rank, user }) => {
  const score = user.questions.length + Object.keys(user.answers).length;
  return (
    <div className={classes.userCard}>
      <img className={classes.medal} src={rank} alt="" />
      <div className={classes.card}>
        <div className={classes.imgHolder}>
          <img src={user.avatarURL} alt="" />
        </div>
        <div className={classes.cardBody}>
          <h2>{user.name}</h2>
          <div>
            <p>Answered Questions</p>
            <span>{Object.keys(user.answers).length}</span>
          </div>
          <div>
            <p>Created Questions</p>
            <span>{user.questions.length}</span>
          </div>
        </div>
        <div className={classes.score}>
          <h3>Score</h3>
          <span>{score}</span>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardUser;
