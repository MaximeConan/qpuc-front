import React from 'react'
import { useDispatch } from 'react-redux'

import Form from '../../components/Form/Form'
import LeftContainer from '../../components/Layout/LeftContainer'
import RightContainer from '../../components/Layout/RightContainer'
import GlobalContainer from '../../components/Layout/GlobalContainer'
import { postSignin } from '../../actions/authActions'
import { navigateTo } from '../../actions/navActions'

const SigninPage = () => {
	const dispatch = useDispatch()

	const fields = [
		{ type: 'email', name: 'email', placeholder: 'Adresse email', isRequired: true },
		{ type: 'password', name: 'password', placeholder: 'Mot de passe', isRequired: true }
	]

	const _onSubmit = ({ email, password }) => {
		dispatch(postSignin(email.value, password.value))
	}

	return (
		<GlobalContainer>
			<LeftContainer>
				<h1>Connectez-vous !</h1>
				<p>
					Une fois connecté, vous aurez accès aux questions,<br /> à votre classement et pourrez ajouter vos
					propres questions !
				</p>
			</LeftContainer>
			<RightContainer>
				<Form fields={fields} onSubmit={_onSubmit} buttonLabel="Connexion" />
				<p>
					Pas encore de compte ? <div onClick={() => dispatch(navigateTo('/inscription'))}>Inscrivez-vous</div>
				</p>
				<p>
					Mot de passe oublié ? <div onClick={() => dispatch(navigateTo('/mot-de-passe-oublie'))}>Par ici !</div>
				</p>
			</RightContainer>
		</GlobalContainer>
	)
}

export default SigninPage
