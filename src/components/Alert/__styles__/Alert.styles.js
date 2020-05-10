import styled from 'styled-components'

const Root = `
  width: 100%;
  padding: 1em;
  border-radius: 5px;
  border 1px solid;
`

export const Success = styled.div`
	${Root};
	background: white;

	& > * {
		color: #22c15b;
	}

	& > p {
		margin: 0;
	}
`

export const Failure = styled.div`
	${Root};
	background: white;

	& > * {
		color: #e85c5c;
	}

	& > p {
		margin: 0;
	}
`
