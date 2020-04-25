import styled from 'styled-components'

export const NavContainer = styled.nav`
  height: ${({ theme }) => theme.components.nav.height};
  background-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  align-items: center;
  justify-content: center;`

export const NavItemsContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: center;
  
  
  & > li {
    margin-right: ${({ theme }) => theme.spaces.small};
    
    & > a {
      color: ${({ theme }) => theme.colors.primaryTextColor};
    }
  }

  & > li:last-child {
    margin: 0;
  }
`