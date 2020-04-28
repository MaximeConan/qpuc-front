import styled from 'styled-components'
import { darken } from 'polished'

export const Root = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primaryColor};
	color: ${({ theme }) => theme.colors.primaryTextColor};
	text-align: left;
`

export const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: calc(100vh - ${({ theme }) => theme.components.nav.height});
`

export const FormContainer = styled.div`
	background-color: ${({ theme }) => darken(0.1, theme.colors.primaryColor)};
	height: 100%;
	width: 50%;
	overflow-y: scroll;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const Form = styled.form`width: 70%;`

export const StepsInputContainer = styled.div`
	background-color: rgba(255, 255, 255, 0.1);
	padding: ${({ theme }) => theme.spaces.small};
	border-radius: ${({ theme }) => theme.borderRadius.medium};
	color: #fff;
	margin-bottom: ${({ theme }) => theme.spaces.small};
`

export const InputContainer = styled.div`
	display: flex;
	margin-top: ${({ theme }) => theme.spaces.small};

	&:first-child {
		margin: 0;
	}
`

export const Icon = styled.i`
	background-color: ${({ theme }) => theme.colors.secondaryColor};
	display: flex;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: ${({ theme }) => theme.spaces.small};
	border-radius: ${({ theme }) => theme.borderRadius.medium};
	margin-left: ${({ theme }) => theme.spaces.small};
	cursor: pointer;
	transition: all .3s;

	&:hover {
		background-color: ${({ theme }) => darken(0.1, theme.colors.secondaryColor)};
	}
`

export const AnswersContainer = styled.div`
	display: flex;
	margin-top: ${({ theme }) => theme.spaces.small};
	flex-wrap: wrap;
`

export const AnswerTag = styled.div`
	color: #fff;
	margin-right: ${({ theme }) => theme.spaces.small};
	border-radius: ${({ theme }) => theme.borderRadius.small};
	text-align: center;
	margin-bottom: ${({ theme }) => theme.spaces.small};
	display: flex;
	justify-content: center;
	align-items: center;

	& > div {
		padding: 0 .5em;
		border: 1px solid;
		border-radius: 5px 0 0 5px;
	}

	& > span {
		background: #fff;
		color: ${({ theme }) => theme.colors.primaryColor};
		height: 100%;
		display: flex;
		align-items: center;
		padding: 0 .5em;
		border-radius: 0 5px 5px 0;
	}
`

export const TipsContainer = styled.div`
	width: 50%;
	padding: 3em;
`

export const Tips = styled.div`
	background-color: rgba(255, 255, 255, 0.2);
	color: ${({ theme }) => theme.colors.primaryTextColor};
	padding: ${({ theme }) => theme.spaces.small};
	border-radius: ${({ theme }) => theme.borderRadius.small};
	margin-bottom: ${({ theme }) => theme.spaces.small};

	&:last-child {
		margin: 0;
	}

	& > h4 {
		color: ${({ theme }) => theme.colors.primaryTextColor};
		margin-top: ${({ theme }) => theme.spaces.small};
		margin-bottom: ${({ theme }) => theme.spaces.small};
	}

	& > p:last-child {
		margin: 0;
	}
`
