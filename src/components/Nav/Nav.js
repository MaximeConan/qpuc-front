import React, { useState, useRef, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useBreakpoint from '../../hooks/useBreakpoint'
import { SM, MD } from '../../enums/breakpointsTypes'

import { selectToken } from '../../selectors/tokenSelectors'
import { signout } from '../../actions/authActions'

import Button from '../Button/Button'

import * as Styled from './__styles__/Nav.styles'
import { navigateTo } from '../../actions/navActions'

const Nav = () => {
	const dispatch = useDispatch()

	const token = useSelector(selectToken)

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

	const onSignoutClick = () => {
		dispatch(signout())
	}

	const onItemClick = (path) => {
		setIsOpen(false)
		dispatch(navigateTo(path))
	}

	const auth = {
		isAuth: [
			{ path: '/', label: 'Accueil' },
			{ path: '/question', label: 'Question du jour' },
			{ path: '/post-question', label: 'Proposer une question' },
			{ path: '/', label: 'Déconnexion', action: onSignoutClick }
		],
		isNotAuth: [
			{ path: '/', label: 'Accueil' },
			{ path: '/connexion', label: 'Connexion' },
			{ path: '/inscription', label: 'Inscription' }
		]
	}

	const resolveAuthItems = () => {
		const isAuth = token ? 'isAuth' : 'isNotAuth'
		return auth[isAuth].map((item, index) => (
			<li key={index} onClick={item.action}>
				<div to={item.path} onClick={() => onItemClick(item.path)}>
					{item.label}
				</div>
			</li>
		))
	}

	return (
		<Styled.NavContainer>
			{breakpoint === SM || breakpoint === MD ? (
				<Fragment>
					<Button
						label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
						spaces={{ bottom: 0 }}
						onClick={(e) => onMenuClick(e)}
					/>
					{isOpen && (
						<Styled.MobileNavItemsContainer ref={dropdownMenu}>
							{resolveAuthItems()}
						</Styled.MobileNavItemsContainer>
					)}
				</Fragment>
			) : (
				<Styled.NavItemsContainer>{resolveAuthItems()}</Styled.NavItemsContainer>
			)}
		</Styled.NavContainer>
	)
}

export default Nav
