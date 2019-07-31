import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';
import { Rows, Item} from '@cda/flex';

const StyledRows = styled(Rows)`
   width: ${({ compact }) => compact ? '5rem' : '15rem'};
   overflow: visible;
   
   div {
      z-index: 10;
   }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  width: ${({ compact }) => compact ? '4rem' : '15rem'};
  padding: 1rem;
  z-index: 1;
  cursor: pointer;
  overflow: hidden;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    width: 15rem;
    transition: 0.25s width ease-in-out;
  }
  
  p {
    float: left;
    left: 3em;
    font-size: 1.25rem;
    margin: 0;
    height: 2rem;
    margin-left: 1rem;
    overflow: hidden;
  }
`;

const Sidebar = ({ items, compact = true }) => (
  <StyledRows compact={compact}>
    {items.map(({ icon, label, link }) => <Item noGutter><StyledLink to={link} compact={compact}><FontAwesomeIcon icon={icon} size="2x" /><p>{label}</p></StyledLink></Item>)}
  </StyledRows>
);

export default Sidebar;
