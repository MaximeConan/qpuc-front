import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import QuestionPage from './screens/questions/QuestionPage'
import PostQuestionPage from './screens/questions/PostQuestionPage'
import SigninPage from './screens/auth/SigninPage'
import SignupPage from './screens/auth/SignupPage'
import ForgetPassword from './screens/auth/ForgetPassword'
import Home from './screens/home/Home'

import Nav from './components/Nav/Nav'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

const App = () => {
	return (
		<Router>
			<Nav />
			<Switch>
				<PrivateRoute path="/question" isAuthenticated={true}>
					<QuestionPage />
				</PrivateRoute>
				<PrivateRoute path="/post-question" isAuthenticated={true}>
					<PostQuestionPage />
				</PrivateRoute>
				<Route path="/connexion">
					<SigninPage />
				</Route>
				<Route path="/inscription">
					<SignupPage />
				</Route>
				<Route path="/mot-de-passe-oublie">
					<ForgetPassword />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
