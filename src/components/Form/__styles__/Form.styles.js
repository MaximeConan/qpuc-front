import styled from 'styled-components'
import { darken } from 'polished'

export const Root = styled.div`
	width: 480px;

	${({ theme }) => theme.devices.md} {
		width: 100%;
	}
`

export const Input = styled.input`
	border: none;
	width: 100%;
	padding: ${({ theme }) => theme.spaces.small};
	border-radius: ${({ theme }) => theme.borderRadius.medium};
	color: ${({ theme }) => theme.colors.darkGrey};
	margin-bottom: ${({ theme }) => theme.spaces.small};
`
export const Button = styled.button`
	border: none;
	border-radius: ${({ theme }) => theme.borderRadius.medium};
	width: 100%;
	background-color: ${({ theme }) => theme.colors.secondaryColor};
	color: ${({ theme }) => darken(0.3, theme.colors.secondaryColor)};
	padding: ${({ theme }) => theme.spaces.small};
	transition: all .3s;
	cursor: pointer;
	margin-bottom: ${({ theme }) => theme.spaces.small};

	&:hover {
		background-color: ${({ theme }) => darken(0.1, theme.colors.secondaryColor)};
	}
`

export const Error = styled.div`
	background-color: #222;
	padding: 1em;
	border-radius: 5px;
	margin-bottom: 1em;

	& > p:last-child {
		padding-bottom: 0;
		margin-bottom: 0;
	}
`
