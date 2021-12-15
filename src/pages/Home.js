import React, { useState } from "react";
import { useSelector } from "react-redux";
import HomeNav from "../components/layout/HomeNav";
import QuestionsList from "../components/Questions/QuestionsList";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const Home = () => {
  const [mainList, setMainList] = useState(true);
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  const authUser = users.authUser;
  const unAnsweredQuestions = Object.values(questions).filter(
    (question) =>
      !Object.keys(users.users[authUser].answers).includes(question.id)
  );
  const AnsweredQuestions = Object.values(questions).filter((question) =>
    Object.keys(users.users[authUser].answers).includes(question.id)
  );
  return (
    <section className="home-sec">
      <HomeNav showList={setMainList} mainList={mainList} />
      {Object.keys(questions).length === 0 ? (
        <LoadingSpinner />
      ) : (
        <>
          <main>
            {mainList && (
              <div>
                {questions && (
                  <QuestionsList
                    questions={unAnsweredQuestions}
                    users={users.users}
                  />
                )}
              </div>
            )}
            {!mainList && (
              <div>
                {questions && (
                  <QuestionsList
                    questions={AnsweredQuestions}
                    users={users.users}
                  />
                )}
              </div>
            )}
          </main>
        </>
      )}
    </section>
  );
};

export default Home;
