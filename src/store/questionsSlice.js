import { createSlice } from "@reduxjs/toolkit";
import { addQuestion, addVote } from "./usersSlice";

const questions = {};

const questionsSlice = createSlice({
  name: "questions",
  initialState: questions,
  reducers: {
    setQuestions(state, action) {
      return (state = action.payload);
    },
    addNewQuestion(state, action) {
      state[action.payload.id] = action.payload;
    },
    setAnswer(state, action) {
      const Votes = state[action.payload.question.id][
        action.payload.answer
      ].votes.filter((item) => item !== "");
      Votes.push(action.payload.user.id);
      state[action.payload.question.id][action.payload.answer].votes = Votes;
    },
  },
});
const generateUID = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

const formatQuestion = ({ optionOne, optionTwo, author, authorId }) => {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author: author,
    authorId: authorId,
    optionOne: {
      votes: [""],
      text: optionOne,
    },
    optionTwo: {
      votes: [""],
      text: optionTwo,
    },
  };
};

export const saveQuestion = (questionData) => {
  return async (dispatch) => {
    const newQestion = formatQuestion(questionData);
    const questionID = await fetch(
      "https://would-u-rather-520f9-default-rtdb.europe-west1.firebasedatabase.app/questions.json",
      { method: "POST", body: JSON.stringify(newQestion) }
    ).then((res) => res.json());
    newQestion.id = questionID.name;
    const LastQuestion = await fetch(
      `https://would-u-rather-520f9-default-rtdb.europe-west1.firebasedatabase.app/questions/${questionID.name}.json`,
      {
        method: "PUT",
        body: JSON.stringify(newQestion),
      }
    ).then((res) => res.json());
    dispatch(questionsActions.addNewQuestion(LastQuestion));
    dispatch(
      addQuestion({ questionId: questionID.name, user: questionData.authUser })
    );
  };
};

export const SaveAnswer = ({ question, user, answer }) => {
  return async (dispatch) => {
    let votes = [];
    if (!question[answer].votes || question[answer].votes.length === 0) {
      votes = [user.id];
    } else {
      votes = [...question[answer].votes, user.id];
    }
    await fetch(
      `https://would-u-rather-520f9-default-rtdb.europe-west1.firebasedatabase.app/questions/${question.id}/${answer}/votes.json`,
      {
        method: "PUT",
        body: JSON.stringify(votes),
      }
    ).then((res) => res.json());
    dispatch(addVote({ questionId: question.id, user, answer }));
  };
};
export const questionsActions = questionsSlice.actions;
export default questionsSlice.reducer;
