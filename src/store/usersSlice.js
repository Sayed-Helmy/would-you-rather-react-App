import { createSlice } from "@reduxjs/toolkit";

const intialValue = {
  authUser: null,
  users: {
    sarahedo: {
      id: "sarahedo",
      name: "Sarah Edo",
      avatarURL: "./assets/sarahedo.jpg",
      answers: {
        "8xf0y6ziyjabvozdd253nd": "optionOne",
        "6ni6ok3ym7mf1p33lnez": "optionTwo",
        am8ehyc8byjqgar0jgpub9: "optionTwo",
        loxhs1bqm25b708cmbf3g: "optionTwo",
      },
      questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
    },
    tylermcginnis: {
      id: "tylermcginnis",
      name: "Tyler McGinnis",
      avatarURL: "./assets/tylermcginnis.jpg",
      answers: {
        vthrdm985a262al8qx3do: "optionOne",
        xj352vofupe1dqz9emx13r: "optionTwo",
      },
      questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
    },
    johndoe: {
      id: "johndoe",
      name: "John Doe",
      avatarURL: "./assets/johndoe.png",
      answers: {
        xj352vofupe1dqz9emx13r: "optionOne",
        vthrdm985a262al8qx3do: "optionTwo",
        "6ni6ok3ym7mf1p33lnez": "optionTwo",
      },
      questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
    },
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState: intialValue,
  reducers: {
    signin(state, action) {
      state.authUser = action.payload;
    },
    setUsers(state, action) {
      state.users = action.payload;
    },
    addNewQuestion(state, action) {
      state.users[action.payload.user.id].questions.push(
        action.payload.questionId
      );
    },
    addNewVote(state, action) {
      state.users[action.payload.user.id].answers[action.payload.questionId] =
        action.payload.answer;
    },
  },
});

export const addQuestion = ({ questionId, user }) => {
  return (dispatch) => {
    fetch(
      `https://would-u-rather-520f9-default-rtdb.europe-west1.firebasedatabase.app/users/${user.id}/questions.json`,
      {
        method: "PUT",
        body: JSON.stringify([...user.questions, questionId]),
      }
    ).then((res) => res.json());
    dispatch(usersActions.addNewQuestion({ questionId, user }));
  };
};
export const addVote = ({ questionId, user, answer }) => {
  return (dispatch) => {
    fetch(
      `https://would-u-rather-520f9-default-rtdb.europe-west1.firebasedatabase.app/users/${user.id}/answers.json`,
      {
        method: "PUT",
        body: JSON.stringify({ ...user.answers, [questionId]: answer }),
      }
    ).then((res) => res.json());
    dispatch(usersActions.addNewVote({ questionId, user, answer }));
  };
};

export const usersActions = usersSlice.actions;
export default usersSlice.reducer;
