import React from "react";
import classes from "./LeaderBoardList.module.css";
import LeaderBoardUser from "./LeaderBoardUser";

const LeaderBoardList = ({ leaderBoard }) => {
  return (
    <div className={classes.leaderBoard}>
      {leaderBoard.map((user) => (
        <LeaderBoardUser rank={user.rank} user={user.user} key={user.user.id} />
      ))}
    </div>
  );
};

export default LeaderBoardList;
