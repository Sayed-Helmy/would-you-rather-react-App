import React from "react";
import QuestionForm from "../components/Questions/QuestionForm";

const NewQuestion = () => {
  return (
    <section className="new-question">
      <div>
        <h2>Create New Question</h2>
      </div>
      <QuestionForm />
    </section>
  );
};

export default NewQuestion;
