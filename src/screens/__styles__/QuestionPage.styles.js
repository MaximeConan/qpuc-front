import styled from 'styled-components'
import { darken } from 'polished'
import { Spin } from 'antd'

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

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Form = styled.form`
  width: 70%;
  & > button, & > input {
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    margin-bottom: ${({ theme }) => theme.spaces.small};
  }
  
  & > input {
    width: calc(100% - 3em);
    padding: 1.5em;
  }

  & > button {
    width : 100%;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    color: ${({ theme }) => darken(0.3, theme.colors.secondaryColor)};
    padding: ${({ theme }) => theme.spaces.small};
    transition: all .3s;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => darken(0.1, theme.colors.secondaryColor)};
    }
  }
`

export const TipsContainer = styled.div`
  width: 50%;
  padding: 0 ${({ theme }) => theme.spaces.large};
  height: calc(100% - ${({ theme }) => theme.spaces.large});
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Tips = styled.div`
  padding-bottom: ${({ theme }) => theme.spaces.small};
  margin-bottom: ${({ theme }) => theme.spaces.small};
  border-bottom: 1px solid;
`

export const CatchPhrase = styled.div`
  font-weight: bold;
  font-size: 18px;
`

export const SuccessMessage = styled.div`
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    padding: 3em 5em;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
`

export const ErrorMessage = styled.div`
    margin-bottom: ${({ theme }) => theme.spaces.small};
    font-weight: bold;
    font-size: 18px;
`


export const Loader = styled(Spin)`
display: flex;
justify-content: center;
align-items: center;
`

export const Timer = styled.div`
  margin-bottom: ${({ theme }) => theme.spaces.small};
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
    background: ${({ theme }) => theme.colors.secondaryColor};
    transition: all 1s;
  }

  &:hover:after {
    width: 100%;
  }
`