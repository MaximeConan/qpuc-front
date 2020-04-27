import React from 'react'
import { Link } from 'react-router-dom'

import * as Styled from './__styles__/Home.styles'

const Home = () => {
	return (
		<Styled.Root>
			<Styled.TitleContainer>
				<h1>Bienvenue sur QPUC !</h1>
				<p>
					Une fois connecté, vous aurez accès aux questions,<br /> à votre classement et pourrez ajouter vos
					propres questions !
				</p>
			</Styled.TitleContainer>
			<Styled.AuthContainer>
				<Styled.ButtonContainer>
					<p>
						<span>De retour ?</span>
						<br />Connectez-vous pour participer.
					</p>
					<Styled.Button to="connexion">connexion</Styled.Button>
				</Styled.ButtonContainer>
				<Styled.ButtonContainer>
					<p>
						<span>Pas encore de compte ?</span>
						<br /> C'est le moment de vous inscrire !
					</p>
					<Styled.Button to="inscription">Inscription</Styled.Button>
				</Styled.ButtonContainer>
			</Styled.AuthContainer>
		</Styled.Root>
	)
}

export default Home
