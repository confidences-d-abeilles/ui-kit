import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';

export const Button = withTheme(styled('button')`
  margin: 0.125rem 0.5rem;
  display: inline-block;
  padding: 0.25rem 1rem;
  border: none;
  transition: all 0.125s;
  cursor: pointer;
  text-align: center;

  &:hover, &:focus, &:active {
    text-decoration: none;
    outline: none;
  }
  
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};

  &:hover, &:focus, &:active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`);

Button.propTypes = {
  primary: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
};
