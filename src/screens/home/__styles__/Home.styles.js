import styled from 'styled-components'

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