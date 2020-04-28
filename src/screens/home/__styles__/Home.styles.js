import styled from 'styled-components'
import { darken } from 'polished'
import { Link } from 'react-router-dom'

export const Root = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primaryColor};
	color: ${({ theme }) => theme.colors.primaryTextColor};
	height: calc(100vh - ${({ theme }) => theme.components.nav.height});
	text-align: center;
`

export const TitleContainer = styled.div`
	background-color: ${({ theme }) => darken(0.1, theme.colors.primaryColor)};
	height: 100%;
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const AuthContainer = styled.div`
	width: 50%;
	padding: 0 ${({ theme }) => theme.spaces.large};
	text-align: center;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const ButtonContainer = styled.div`
	background-color: rgba(255, 255, 255, 0.1);
	padding: ${({ theme }) => theme.spaces.medium};
	border-radius: ${({ theme }) => theme.borderRadius.medium};
	margin-bottom: ${({ theme }) => theme.spaces.small};
	width: 480px;

	& > p > span {
		font-weight: 900;
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
