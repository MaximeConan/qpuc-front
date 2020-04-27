import React from 'react'
import { Link } from 'react-router-dom'

import * as Styled from './__styles__/Nav.styles'

const Nav = () => {
	return (
		<Styled.NavContainer>
			<Styled.NavItemsContainer>
				<li>
					<Link to="/">Accueil</Link>
				</li>
				<li>
					<Link to="/question">Question du jour</Link>
				</li>
				<li>
					<Link to="/post-question">Proposer une question</Link>
				</li>
				<li>
					<Link to="/connexion">Connexion</Link>
				</li>
				<li>
					<Link to="/inscription">Inscription</Link>
				</li>
			</Styled.NavItemsContainer>
		</Styled.NavContainer>
	)
}

export default Nav
