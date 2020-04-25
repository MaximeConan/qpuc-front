import styled from 'styled-components'
import { darken } from 'polished'

export const Root = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - ${({ theme }) => theme.components.nav.height});
  color: ${({ theme }) => theme.colors.primaryTextColor};
  text-align: left;
`

export const FormContainer = styled.div`
  background-color: ${({ theme }) => darken(0.1, theme.colors.primaryColor)};
  width: 50%;
  border-radius:${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spaces.large};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spaces.large};
`

export const Form = styled.form`
  width: 100%;
`

export const InputContainer = styled.div`
  background-color: rgba(255,255,255, 0.1);
  padding: ${({ theme }) => theme.spaces.small};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: #FFF;
  margin-bottom: ${({ theme }) => theme.spaces.small};
`

export const Input = styled.input`
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  width: calc(100% - 3em);
  padding: 1.5em;
  margin-bottom: ${({ theme }) => theme.spaces.small};
  margin-top: ${({ theme }) => theme.spaces.small};

`

export const Button = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  width : 49%;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  color: ${({ theme }) => darken(0.3, theme.colors.secondaryColor)};
  padding: ${({ theme }) => theme.spaces.small};
  transition: all .3s;
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spaces.small};

  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.colors.secondaryColor)};
  }
`

export const ButtonStepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const AnswersContainer = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spaces.small};
`

export const AnswerTag = styled.div`
  border: 1px solid;
  padding: .3em .5em;
  color: #FFF;
  margin-right: ${({ theme }) => theme.spaces.small};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`