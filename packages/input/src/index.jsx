import React from 'react';
import styled from '@emotion/styled';

const StyledInput = styled('input')`
  &[type="text"], &[type="email"], &[type="password"], &[type="tel"] {
    width: 100%;
    padding: 0.25rem 0.5rem;
    margin: 0.5rem;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.black};
    border-width: 0 0 1px 0;
    background: none;
    &:focus {
      margin-bottom: calc(0.5rem - 1px);
      border-width: 0 0 2px 0;
    }
  }
`;

export default StyledInput;
