import styled from "styled-components";

export const Container = styled.div`
padding-top: 20px;
 
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

width: 400px;
`;
export const List = styled.ul`
list-style: none;
padding-left:0;

`;

export const ListItem = styled.li`
display: flex;
gap: 10px;
margin-bottom: 10px;
color: ${prop => prop.theme.colors.light};
`;

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
border: transparent;
background-color:  ${prop => prop.theme.colors.dark};
width: 30px;
height: 30px;
cursor:pointer;

 &:hover{
  background-color:  ${prop => prop.theme.colors.light};
border-radius: 4px;
 }
`;
export const ContainerButtons = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
`;

export const ContainerContact = styled.div`
display: flex;
width: 400px;
padding: 4px;
border-radius:4px;
align-items: center;
&:hover{
  border:0;
  
  background-color: ${prop => prop.theme.colors.light};
  color:${prop => prop.theme.colors.dark};
  }
`;
export const Contact = styled.p`
margin-right: 20px;

`;
export const PhoneNumber = styled.p`
font-style: italic;
margin-right: auto;
`;