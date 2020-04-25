import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import QuestionPage from './screens/QuestionPage'
import PostQuestionPage from './screens/PostQuestionPage'

import Nav from './components/Nav/Nav'

const App = () => {
  return (
    <Router>
        <Nav />
        <Switch>
          <Route path="/question">
            <QuestionPage />
          </Route>
          <Route path="/post-question">
            <PostQuestionPage />
          </Route>
          <Route path="/">
            <div>Home</div>
          </Route>
        </Switch>
    </Router>
  );
}

export default App