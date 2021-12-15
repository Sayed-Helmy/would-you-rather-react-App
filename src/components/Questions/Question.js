import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./Question.module.css";

const Question = ({ question, id, author, user }) => {
  const history = useHistory();
  const onClickHandler = () => {
    history.push("/home/" + id);
  };
  return (
    <article className={classes.question}>
      <header>{author} Asking</header>
      <div className={classes["question-body"]}>
        <div className={classes.imgHolder}>
          <img src={user.avatarURL} alt="" />
        </div>
        <div className={classes.questionPoll}>
          <div>
            <p>Would you Rather..</p>
            <p>A: {question.optionOne.text}</p>
            <p>B: .....</p>
          </div>
          <button onClick={onClickHandler}>View Poll</button>
        </div>
      </div>
    </article>
  );
};

export default Question;
