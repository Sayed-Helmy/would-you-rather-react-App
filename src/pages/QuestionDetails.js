import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AnsweredQuestion from "../components/Questions/AnsweredQuestion";
import UnAnsweredQuestion from "../components/Questions/UnAnsweredQuestion";

const QuestionDetails = () => {
  const questionId = useParams().questionId;
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  const authUser = Object.values(users.users).find(
    (user) => user.id === users.authUser
  );
  if (!questions[questionId]) {
    return <div></div>;
  }
  const isAnswered = Object.keys(authUser.answers).includes(questionId);
  return (
    <section className="question-details">
      {!isAnswered && (
        <UnAnsweredQuestion
          question={questions[questionId]}
          author={users.users[questions[questionId].authorId]}
          authUser={authUser}
        />
      )}
      {isAnswered && (
        <AnsweredQuestion
          question={questions[questionId]}
          author={users.users[questions[questionId].authorId]}
          authUser={authUser}
        />
      )}
    </section>
  );
};

export default QuestionDetails;
