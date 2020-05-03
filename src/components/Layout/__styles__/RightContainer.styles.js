import styled from 'styled-components'

export const Root = styled.div`
	width: 50%;
	padding: 0 ${({ theme }) => theme.spaces.large};
	text-align: center;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	${({ theme }) => theme.devices.md} {
		width: 100%;
		padding: ${({ theme }) => theme.spaces.medium};
	}
`
