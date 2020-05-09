import styled from 'styled-components'
import { darken } from 'polished'
import { Spin } from 'antd'

const primaryColor = '#ff7091'
const secondaryColor = '#f3c623'
const primaryTextColor = '#FFF'

const spaces = {
	small: '1em',
	medium: '2em',
	large: '3em'
}

export const Root = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: ${primaryColor};
	color: ${primaryTextColor};
`

export const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`

export const FormContainer = styled.div`
	background-color: ${darken(0.1, primaryColor)};
	height: 100%;
	width: 50%;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const Form = styled.form`width: 70%;`

export const TipsContainer = styled.div`
	width: 50%;
	padding: ${spaces.large};
	height: 100%;
	text-align: center;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const Tips = styled.div`
	padding-bottom: ${spaces.small};
	margin-bottom: ${spaces.small};
	border-bottom: 1px solid;
`

export const CatchPhrase = styled.div`
	font-weight: bold;
	font-size: 18px;
`

export const SuccessMessage = styled.div`
	background-color: ${secondaryColor};
	padding: 3em 5em;
	border-radius: 5px;
	font-weight: bold;
	font-size: 18px;
`

export const ErrorMessage = styled.div`
	margin-bottom: ${spaces.small};
	font-weight: bold;
	font-size: 18px;
`

export const Loader = styled(Spin)`
display: flex;
justify-content: center;
align-items: center;
`

export const Timer = styled.div`
	margin-bottom: ${spaces.small};
	position: absolute;
	text-align: center;
	top: 10px;
`

export const ToggleSolution = styled.div`
	display: inline-block;
	cursor: pointer;
	transition: all .5s;

	::after {
		content: '';
		width: 0px;
		height: 1px;
		display: block;
		background: ${secondaryColor};
		transition: all 1s;
	}

	&:hover:after {
		width: 100%;
	}
`
