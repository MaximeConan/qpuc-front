import styled from 'styled-components'
import { darken } from 'polished'

export const Root = styled.div`
	background-color: ${({ theme }) => darken(0.1, theme.colors.primaryColor)};
	height: 100%;
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	${({ theme }) => theme.devices.md} {
		width: 100%;
		padding: ${({ theme }) => theme.spaces.medium};
	}
`
