import styled from 'styled-components'
import { darken } from 'polished'

export const Primary = styled.button`
	border: none;
	width: ${({ width }) => width};
	border-radius: ${({ theme }) => theme.borderRadius.medium};
	background-color: ${({ theme }) => theme.colors.secondaryColor};
	color: ${({ theme }) => darken(0.3, theme.colors.secondaryColor)};
	padding: ${({ theme }) => theme.spaces.small};
	transition: all .3s;
	cursor: pointer;
	display: inline-block;

	${({ spaces }) => {
		return Object.entries(spaces).map((space) => `margin-${space[0]}: ${space[1]}em;`)
	}};

	&:hover {
		background-color: ${({ theme }) => darken(0.1, theme.colors.secondaryColor)};
	}
`

export const Secondary = styled.button`
	border: none;
	width: ${({ width }) => width};
	border-radius: ${({ theme }) => theme.borderRadius.medium};
	background-color: ${({ theme }) => theme.colors.primaryColor};
	color: ${({ theme }) => darken(0.3, theme.colors.primaryColor)};
	padding: ${({ theme }) => theme.spaces.small};
	transition: all .3s;
	cursor: pointer;
	display: inline-block;

	${({ spaces }) => {
		return Object.entries(spaces).map((space) => `margin-${space[0]}: ${space[1]}em;`)
	}};

	&:hover {
		background-color: ${({ theme }) => darken(0.1, theme.colors.primaryColor)};
	}
`
