import React from 'react'

import Form from '../../components/Form/Form'
import LeftContainer from '../../components/Layout/LeftContainer'
import RightContainer from '../../components/Layout/RightContainer'
import GlobalContainer from '../../components/Layout/GlobalContainer'

const ForgetPassword = () => {
	const fields = [ { type: 'email', name: 'email', placeholder: 'Adresse email' } ]

	const _onSubmit = (formData) => {
		console.log(formData)
	}

	return (
		<GlobalContainer>
			<LeftContainer>
				<h1>Mot de passe oublié ?</h1>
				<p>
					Une fois connecté, vous aurez accès aux questions,<br /> à votre classement et pourrez ajouter vos
					propres questions !
				</p>
			</LeftContainer>
			<RightContainer>
				<Form fields={fields} onSubmit={_onSubmit} buttonLabel="Soumettre" />
			</RightContainer>
		</GlobalContainer>
	)
}

export default ForgetPassword
