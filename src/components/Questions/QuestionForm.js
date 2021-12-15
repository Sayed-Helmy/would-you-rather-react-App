import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Prompt } from "react-router-dom";
import { saveQuestion } from "../../store/questionsSlice";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuestionForm.module.css";

const QuestionForm = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isFocus, setIsFocus] = useState(false);
  const optionOne = useRef();
  const optionTwo = useRef();
  const users = useSelector((state) => state.users);
  const authUser = Object.values(users.users).find(
    (user) => user.id === users.authUser
  );
  const onSubmitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (optionOne.current.value !== "" && optionTwo.current.value !== "") {
      await dispatch(
        saveQuestion({
          optionOne: optionOne.current.value,
          optionTwo: optionTwo.current.value,
          author: authUser.name,
          authorId: authUser.id,
          authUser: authUser,
        })
      );
      setLoading(false);
      history.push("/home");
    } else {
      alert("you have to complate the question");
    }
  };
  const onFocusHandler = () => {
    setIsFocus(true);
  };
  return (
    <>
      <Prompt
        when={isFocus}
        message={() =>
          "Are You Sure you wanna leave this page? your enterd data Will be Lost.."
        }
      />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <form
          className={classes.questionForm}
          onSubmit={onSubmitHandler}
          onFocus={onFocusHandler}
        >
          <p>Complete the Question:</p>
          <div>
            <label htmlFor="input-would">Would You Rather ...</label>
            <input
              type="text"
              id="input-would"
              placeholder="Enter Option One Text Here"
              ref={optionOne}
            />
          </div>
          <div>
            <label htmlFor="input-or">OR</label>
            <input
              type="text"
              id="input-or"
              placeholder="Enter Option Two Text Here"
              ref={optionTwo}
            />
          </div>
          <button onClick={() => setIsFocus(false)}>Submit</button>
        </form>
      )}
    </>
  );
};

export default QuestionForm;
