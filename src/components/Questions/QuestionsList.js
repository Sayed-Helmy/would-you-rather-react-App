import React from "react";
import Question from "./Question";
import classes from "./QuestionsList.module.css";

const QuestionsList = (props) => {
  return (
    <div className={classes["questions-list"]}>
      {props.questions.map((question) => (
        <Question
          key={question.id}
          id={question.id}
          author={question.author}
          question={question}
          user={props.users[question.authorId]}
        />
      ))}
    </div>
  );
};

export default QuestionsList;
