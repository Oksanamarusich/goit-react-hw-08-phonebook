import styled from "styled-components";
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
display: flex;
gap: 20px;
`;

export const Link = styled(NavLink)`
&.active {
    color: ${props => props.theme.colors.accent};
    text-decoration:underline;
  }
   
  font-size: 20px;
  text-decoration: none;
  color: ${props => props.theme.colors.light};
`