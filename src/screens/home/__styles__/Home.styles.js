import styled from 'styled-components'
import { darken } from 'polished'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.div`
	background-color: rgba(255, 255, 255, 0.1);
	padding: ${({ theme }) => theme.spaces.medium};
	border-radius: ${({ theme }) => theme.borderRadius.medium};
	margin-bottom: ${({ theme }) => theme.spaces.small};
	width: 480px;

	& > p > span {
		font-weight: 900;
	}

	${({ theme }) => theme.devices.md} {
		width: 100%;
	}
`

export const Button = styled(Link)`
	border: none;
	border-radius: ${({ theme }) => theme.borderRadius.medium};
	width: 400px;
	background-color: ${({ theme }) => theme.colors.secondaryColor};
	color: ${({ theme }) => darken(0.3, theme.colors.secondaryColor)};
	padding: ${({ theme }) => theme.spaces.small};
	transition: all .3s;
	cursor: pointer;
	margin-top: ${({ theme }) => theme.spaces.small};
  margin-bottom: ${({ theme }) => theme.spaces.small};
  display: inline-block;

	&:hover {
		background-color: ${({ theme }) => darken(0.1, theme.colors.secondaryColor)};
	}
`
