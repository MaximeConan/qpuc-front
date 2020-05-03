import React from 'react'
import { Link } from 'react-router-dom'

import Form from '../../components/Form/Form'
import LeftContainer from '../../components/Layout/LeftContainer'
import RightContainer from '../../components/Layout/RightContainer'
import GlobalContainer from '../../components/Layout/GlobalContainer'

const SigninPage = () => {
	const fields = [
		{ type: 'email', name: 'email', placeholder: 'Adresse email', isRequired: true },
		{ type: 'password', name: 'password', placeholder: 'Mot de passe', isRequired: true }
	]

	const _onSubmit = (formData) => {
		console.log(formData)
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
					Pas encore de compte ? <Link to="/inscription">Inscrivez-vous</Link>
				</p>
				<p>
					Mot de passe oublié ? <Link to="/mot-de-passe-oublie">Par ici !</Link>
				</p>
			</RightContainer>
		</GlobalContainer>
	)
}

export default SigninPage
