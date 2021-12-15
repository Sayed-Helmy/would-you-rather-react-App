import React from "react";
import { useSelector } from "react-redux";
import LeaderBoardList from "../components/users/LeaderBoardList";
const leaderBoard = [
  {
    rank: "/assets/gold-medal.png",
    user: {},
  },
  {
    rank: "/assets/silver-medal.png",
    user: {},
  },
  {
    rank: "/assets/bronze-medal.png",
    user: {},
  },
];
const LeaderBoard = () => {
  const users = useSelector((state) => state.users);
  const usersArray = Object.values(users.users);
  usersArray.sort((a, b) => {
    return (
      b.questions.length +
      Object.keys(b.answers).length -
      (a.questions.length + Object.keys(a.answers).length)
    );
  });
  leaderBoard.forEach((item, i) => (item.user = usersArray[i]));
  return (
    <section className="leader-board">
      <LeaderBoardList leaderBoard={leaderBoard} />
    </section>
  );
};

export default LeaderBoard;
