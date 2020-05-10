import React, { useEffect, Fragment } from 'react'
import { Redirect, Router } from '@reach/router'
import { useDispatch } from 'react-redux'

import QuestionPage from './screens/questions/QuestionPage'
import PostQuestionPage from './screens/questions/PostQuestionPage'
import SigninPage from './screens/auth/SigninPage'
import SignupPage from './screens/auth/SignupPage'
import ForgetPassword from './screens/auth/ForgetPassword'
import Home from './screens/home/Home'

import Main from './components/Layout/MainContainer'

import { startup } from './actions/appActions'

const App = () => {
	const dispatch = useDispatch()

	useEffect(
		() => {
			dispatch(startup())
		},
		[ dispatch ]
	)

	return (
		<Fragment>
			<Router>
				<Main path="/">
					<QuestionPage path="/question" />
					<PostQuestionPage path="/post-question" />
					<SigninPage path="/connexion" />
					<SignupPage path="/inscription" />
					<ForgetPassword path="/mot-de-passe-oublie" />
					<Home path="/" />
					<Redirect from="/*" to="/" noThrow />
				</Main>
				<Redirect from="/*" to="/" noThrow />
			</Router>
		</Fragment>
	)
}

export default App
