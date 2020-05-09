import React from 'react'
import { useDispatch } from 'react-redux'

import Button from '../../components/Button/Button'
import LeftContainer from '../../components/Layout/LeftContainer'
import RightContainer from '../../components/Layout/RightContainer'
import GlobalContainer from '../../components/Layout/GlobalContainer'

import { navigateTo } from '../../actions/navActions'

import * as Styled from './__styles__/Home.styles'

const Home = () => {
	const dispatch = useDispatch()
	return (
		<GlobalContainer>
			<LeftContainer>
				<h1>Bienvenue sur QPUC !</h1>
				<p>
					Une fois connecté, vous aurez accès aux questions,<br /> à votre classement et pourrez ajouter vos
					propres questions !
				</p>
			</LeftContainer>
			<RightContainer>
				<Styled.ButtonContainer>
					<p>
						<span>De retour ?</span>
						<br />Connectez-vous pour participer.
					</p>
						<Button width="100%" label="Connexion" onClick={() => dispatch(navigateTo('/connexion'))} />
				</Styled.ButtonContainer>
				<Styled.ButtonContainer>
					<p>
						<span>Pas encore de compte ?</span>
						<br /> C'est le moment de vous inscrire !
					</p>
						<Button width="100%" label="Inscription" onClick={() => dispatch(navigateTo('/inscription'))} />
				</Styled.ButtonContainer>
			</RightContainer>
		</GlobalContainer>
	)
}

export default Home
