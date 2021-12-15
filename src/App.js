import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import NewQuestion from "./pages/NewQuestion";
import QuestionDetails from "./pages/QuestionDetails";
import SignIn from "./pages/SignIn";

function App() {
  const users = useSelector((state) => state.users);
  const location = useLocation();
  return (
    <Layout>
      <Switch>
        {!users.authUser && (
          <Route path="*">
            {users.authUser && <Redirect to={location.pathname} />}
            <SignIn />
          </Route>
        )}
        {!users.authUser && <Redirect to="/" />}
        <Route path="/" exact>
          {users.authUser && <Redirect to="/home" />}
          <SignIn />
        </Route>
        {users.authUser && (
          <>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/new-question">
              <NewQuestion />
            </Route>
            <Route path="/leader-board">
              <LeaderBoard />
            </Route>
            <Route path="/home/:questionId">
              <QuestionDetails />
            </Route>
          </>
        )}
      </Switch>
    </Layout>
  );
}

export default App;
