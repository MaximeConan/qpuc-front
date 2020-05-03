import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import useBreakpoint from '../../hooks/useBreakpoint'
import { SM, MD } from '../../enums/breakpointsTypes'

import Button from '../Button/Button'

import * as Styled from './__styles__/Nav.styles'

const Nav = () => {
	const breakpoint = useBreakpoint()
	const [ isOpen, setIsOpen ] = useState(false)

	let dropdownMenu = useRef()

	const onCloseMenu = (e) => {
		if (!dropdownMenu.current.contains(e.target)) {
			setIsOpen(false)
			document.removeEventListener('click', onCloseMenu)
		}
	}

	const onMenuClick = (e) => {
		isOpen ? onCloseMenu(e) : setIsOpen(true)
	}

	const items = [
		{path: '/', label: 'Accueil'},
		{path: '/question', label: 'Question du jour'},
		{path: '/post-question', label: 'Proposer une question'},
		{path: '/connexion', label: 'Connexion'},
		{path: '/inscription', label: 'Inscription'}
	]

	return (
		<Styled.NavContainer>
			{breakpoint === SM || breakpoint === MD ? (
				<>
					<Button
						label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
						spaces={{ bottom: 0 }}
						onClick={(e) => onMenuClick(e)}
					/>
					{isOpen && (
						<Styled.MobileNavItemsContainer ref={dropdownMenu}>
							{items.map((item, index) => 
								<li key={index}>
									<Link to={item.path} onClick={() => setIsOpen(false)}>{item.label}</Link>
								</li>
							)}
						</Styled.MobileNavItemsContainer>
					)}
				</>
			) : (
				<Styled.NavItemsContainer>
					{items.map((item, index) => 
								<li key={index}>
									<Link to={item.path}>{item.label}</Link>
								</li>
							)}
				</Styled.NavItemsContainer>
			)}
		</Styled.NavContainer>
	)
}

export default Nav
