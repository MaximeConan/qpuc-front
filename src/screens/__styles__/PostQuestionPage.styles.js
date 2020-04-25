import styled from 'styled-components'
import { darken } from 'polished'

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.primaryTextColor};
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

export const Form = styled.form`
  width: 70%;

`

export const StepsInputContainer = styled.div`
  background-color: rgba(255,255,255, 0.1);
  padding: ${({ theme }) => theme.spaces.small};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: #FFF;
  margin-bottom: ${({ theme }) => theme.spaces.small};
`


export const InputContainer = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spaces.small};

  &:first-child {
    margin: 0;
  }

  & > input {
    border: none;
    width: calc(100% - 3em);
    padding: ${({ theme }) => theme.spaces.small};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    color: ${({ theme }) => theme.colors.darkGrey};
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

export const Input = styled.input`
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  padding: ${({ theme }) => theme.spaces.small};
  margin-bottom: ${({ theme }) => theme.spaces.small};
  margin-top: ${({ theme }) => theme.spaces.small};
c
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

export const AnswersContainer = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spaces.small};
  flex-wrap: wrap;
`

export const AnswerTag = styled.div`
  border: 1px solid;
  padding: .3em .5em;
  color: #FFF;
  margin-right: ${({ theme }) => theme.spaces.small};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spaces.small};
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