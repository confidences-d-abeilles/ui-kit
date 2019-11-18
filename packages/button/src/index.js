import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';

export const Button = withTheme(styled('button')`
  margin: 0.125rem 0.5rem;
  display: inline-block;
  padding: 0.25rem 1rem;
  border: solid 1px ${({ theme, primary }) => primary ? 'transparent' : theme.colors.primary};
  border-radius: 5px;
  transition: all 0.125s;
  cursor: pointer;
  text-align: center;
  font-size: 1rem;

  &:hover, &:focus, &:active {
    text-decoration: none;
    outline: none;
  }
  
  color: ${({ primary, theme }) => primary ? theme.colors.white : theme.colors.white};
  background-color: ${({ theme, primary }) => primary ? theme.colors.black : theme.colors.primary};

  &:hover, &:focus, &:active {
    background-color: ${({ primary, theme }) => primary ? theme.colors.primary : theme.colors.white};
    color: ${({ primary, theme }) => primary ? theme.colors.white : theme.colors.primary};
  }
`);

export default Button;

Button.propTypes = {
  primary: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
};
