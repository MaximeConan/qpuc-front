import styled from 'styled-components'

export const Root = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primaryColor};
	color: ${({ theme }) => theme.colors.primaryTextColor};
	height: 100%;
	text-align: center;

	${({ theme }) => theme.devices.sm} {
		flex-direction: column;
		height: auto;
	}
`
