import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';

export const Button = withTheme(styled('button')`
  margin: 0.125rem 0.5rem;
  display: inline-block;
  padding: 0.25rem 1rem;
  border: ${({ primary, theme }) => primary ? 'none' : `solid 1px ${theme.colors.primary}`};
  transition: all 0.125s;
  cursor: pointer;
  text-align: center;

  &:hover, &:focus, &:active {
    text-decoration: none;
    outline: none;
  }
  
  color: ${({ primary, theme }) => primary ? theme.colors.white : theme.colors.primary};
  background-color: ${({ theme, primary }) => primary ? theme.colors.black : 'transparent'};

  &:hover, &:focus, &:active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`);

export default Button;

Button.propTypes = {
  primary: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
};
