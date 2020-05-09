import styled from 'styled-components'
import { darken } from 'polished'

export const Root = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primaryColor};
	color: ${({ theme }) => theme.colors.primaryTextColor};
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

export const FormContainer = styled.div`
	width: 50%;
	padding: 0 ${({ theme }) => theme.spaces.large};
	text-align: center;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`
