import styled from 'styled-components'

export const Input = styled.input`
	${({ spaces }) => {
		return Object.entries(spaces).map((space) => `margin-${space[0]}: ${space[1]}em;`)
	}};
	border: none;
	width: 100%;
	padding: ${({ theme }) => theme.spaces.small};
	border-radius: ${({ theme }) => theme.borderRadius.medium};
	color: ${({ theme }) => theme.colors.darkGrey};
`
