import React from "react";
import classes from "./AnsweredQuestion.module.css";
const AnsweredQuestion = ({ question, author, authUser }) => {
  const checkAnswer = authUser.answers[question.id];
  const optionOne = question.optionOne.votes.filter(
    (item) => item !== ""
  ).length;
  const optionTwo = question.optionTwo.votes.filter(
    (item) => item !== ""
  ).length;
  const allVotes = optionOne + optionTwo;
  const activeClassOne =
    checkAnswer === "optionOne"
      ? `${classes.option} ${classes.active}`
      : classes.option;
  const activeClassTwo =
    checkAnswer === "optionTwo"
      ? `${classes.option} ${classes.active}`
      : classes.option;
  return (
    <div className={classes.answered}>
      <header>{question.author} Asking...</header>
      <div className={classes["question-body"]}>
        <div className={classes.imgHolder}>
          <img src={author.avatarURL} alt="" />
        </div>
        <div className={classes.results}>
          <p>Results:</p>
          <div className={activeClassOne}>
            <p>{question.optionOne.text}</p>
            <div className={classes.outer}>
              <p>{Math.floor((optionOne / allVotes) * 100)}%</p>
              <div style={{ width: `${(optionOne / allVotes) * 100}%` }}></div>
            </div>
            <span>
              {optionOne} out of {allVotes} votes
            </span>
          </div>
          <div className={activeClassTwo}>
            <p>{question.optionTwo.text}</p>
            <div className={classes.outer}>
              <p>{Math.floor((optionTwo / allVotes) * 100)}%</p>
              <div style={{ width: `${(optionTwo / allVotes) * 100}%` }}></div>
            </div>
            <span>
              {optionTwo} out of {allVotes} votes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnsweredQuestion;
