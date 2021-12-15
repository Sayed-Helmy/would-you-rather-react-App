import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { questionsActions, SaveAnswer } from "../../store/questionsSlice";
import classes from "./UnAnsweredQuestion.module.css";

const UnAnsweredQuestion = ({ question, author, authUser }) => {
  const dispatch = useDispatch();
  const AnswerOne = useRef();
  const AnswerTwo = useRef();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (AnswerOne.current.checked) {
      dispatch(
        questionsActions.setAnswer({
          question: question,
          user: authUser,
          answer: AnswerOne.current.value,
        })
      );
      dispatch(
        SaveAnswer({
          question: question,
          user: authUser,
          answer: AnswerOne.current.value,
        })
      );
    } else if (AnswerTwo.current.checked) {
      dispatch(
        questionsActions.setAnswer({
          question: question,
          user: authUser,
          answer: AnswerTwo.current.value,
        })
      );
      dispatch(
        SaveAnswer({
          question: question,
          user: authUser,
          answer: AnswerTwo.current.value,
        })
      );
    } else {
      alert("Please Check an Answer..");
    }
  };
  return (
    <div className={classes.unAnswered}>
      <header>{question.author} Asking...</header>
      <div className={classes["question-body"]}>
        <div className={classes.imgHolder}>
          <img src={author.avatarURL} alt="" />
        </div>
        <div className={classes.questionPoll}>
          <p>Would you Rather..</p>
          <form onSubmit={onSubmitHandler}>
            <div>
              <input
                type="radio"
                name="option"
                id="check1"
                value="optionOne"
                ref={AnswerOne}
              />
              <label htmlFor="check1">{question.optionOne.text}</label>
            </div>
            <div>
              <input
                type="radio"
                name="option"
                id="check2"
                value="optionTwo"
                ref={AnswerTwo}
              />
              <label htmlFor="check2">{question.optionTwo.text}</label>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UnAnsweredQuestion;
