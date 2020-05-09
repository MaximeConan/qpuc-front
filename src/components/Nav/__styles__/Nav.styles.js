import styled from 'styled-components'

export const NavContainer = styled.nav`
	background-color: ${({ theme }) => theme.colors.darkGrey};
	display: flex;
	align-items: center;
	justify-content: center;
	padding: ${({ theme }) => theme.spaces.small};

	${({ theme }) => theme.devices.md} {
		flex-direction: column;
	}
`

export const MobileNavItemsContainer = styled.ul`
	display: flex;
	flex-direction: column;
	padding: 0;
	margin: 0;
	list-style-type: none;
	text-align: center;
	width: 100%;

	& > li {
		padding-bottom: ${({ theme }) => theme.spaces.small};
		margin-bottom: ${({ theme }) => theme.spaces.small};
		border-bottom: 1px solid ${({ theme }) => theme.colors.primaryTextColor};
	}

	& > li:first-child {
		margin-top: ${({ theme }) => theme.spaces.small};
	}

	& > li:last-child {
		border: none;
		margin: 0;
	}

`

export const NavItemsContainer = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	list-style-type: none;
	align-items: center;
	justify-content: center;

	& > li {
		margin-right: ${({ theme }) => theme.spaces.small};
		
		& > div {
			transition: all 3.s;
			cursor: pointer;
			color: ${({ theme }) => theme.colors.primaryTextColor};
			
			&:hover {
				opacity: 0.8;
			}
		}
	}

	& > li:last-child {
		margin: 0;
	}
`
