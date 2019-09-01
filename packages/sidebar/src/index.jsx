import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';
import { Columns, Item } from '@cda/flex';

const StyledRows = styled(Columns)`
  width: ${({ isCompact }) => isCompact ? '5rem' : null};
  overflow: visible;
  
  div {
    z-index: 10;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  width: ${({ isCompact }) => isCompact ? '5rem' : 'auto'};
  padding: 1rem;
  z-index: 1;
  cursor: pointer;
  overflow: hidden;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    width: ${({ isCompact }) => isCompact ? '15rem' : null};
    transition: 0.25s width ease-in-out;
  }
  
  p {
    float: left;
    left: 3em;
    vertical-align: middle;
    font-size: rem;
    margin: 0;
    line-height: 2rem;
    height: 2rem;
    margin-left: 1rem;
    overflow: hidden;
  }
`;

const Sidebar = ({ items, compact = true }) => (
  <StyledRows isCompact={compact}>
    {items.map(({ icon, label, link }) => <Item key={label} noGutter><StyledLink to={link} isCompact={compact}><FontAwesomeIcon
      icon={icon} size="2x"/><p>{label}</p></StyledLink></Item>)}
  </StyledRows>
);

export default Sidebar;
