import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';

export const Button = withTheme(styled('button')`
  margin: 0.5rem 1rem;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 2rem;
  transition: all 0.125s;
  cursor: pointer;
  text-align: center;
  font-size: 1rem;
  box-shadow: ${({ flat }) =>  flat ? 'none' : '5px 5px 10px silver'};

  &:hover, &:focus, &:active {
    text-decoration: none;
    outline: none;
    box-shadow: ${({ flat }) =>  flat ? 'none' : '2px 2px 5px silver'};
  }
  
  color: ${({ primary, theme }) => primary ? theme.colors.white : theme.colors.black};
  background-color: ${({ theme, primary }) => primary ? theme.colors.primary : theme.colors.white};

  &:hover, &:focus, &:active {
    background-color: ${({ primary, theme }) => primary ? theme.colors.white : theme.colors.white};
    color: ${({ primary, theme }) => primary ? theme.colors.primary : theme.colors.primary};
  }
`);

export default Button;

Button.propTypes = {
  primary: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
};
