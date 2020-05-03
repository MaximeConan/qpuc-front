import React from 'react'
import { Link } from 'react-router-dom'

import Form from '../../components/Form/Form'
import LeftContainer from '../../components/Layout/LeftContainer'
import RightContainer from '../../components/Layout/RightContainer'
import GlobalContainer from '../../components/Layout/GlobalContainer'

const SignupPage = () => {
	const fields = [
		{ type: 'email', name: 'email', placeholder: 'Adresse email', isRequired: true },
		{ type: 'text', name: 'pseudo', placeholder: 'Ton prénom ou pseudo favoris', isRequired: true },
		{ type: 'password', name: 'password', placeholder: 'Mot de passe', isRequired: true },
		{ type: 'password', name: 'passwordConfirm', placeholder: 'Confirmation de mot de passe', isRequired: true }
	]

	const _onSubmit = (formData) => {
		console.log('Signup Submit', formData)
	}

	return (
		<GlobalContainer>
			<LeftContainer>
				<h1>Inscrivez-vous !</h1>
				<p>
					Une fois inscrit, vous aurez accès aux questions,<br /> à votre classement et pourrez ajouter vos
					propres questions !
				</p>
			</LeftContainer>
			<RightContainer>
				<Form fields={fields} onSubmit={_onSubmit} buttonLabel="Inscription" />
				<p>
					Déjà inscrit ? <Link to="/connexion">Connectez-vous</Link>
				</p>
				<p>
					Mot de passe oublié ? <Link to="/mot-de-passe-oublie">Par ici !</Link>
				</p>
			</RightContainer>
		</GlobalContainer>
	)
}

export default SignupPage
