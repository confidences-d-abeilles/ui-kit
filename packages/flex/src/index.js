import styled from '@emotion/styled';

export const Item = styled.div`
  padding: ${({ gutters }) => (gutters ? '1rem 5rem' : 0)};
  flex: ${({ flex }) => flex};
  align-self: ${({ alignSelf }) => alignSelf || 'initial'};
  text-align: ${({ textAlign }) => textAlign};
`;

export const Columns = styled.div`
  display: flex;
  flex: 1 25rem;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent || 'initial'};
  align-items: ${({ alignItems }) => alignItems || 'initial'};
`;

export const Rows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justifyContent }) => justifyContent || 'initial'};
  align-items: ${({ alignItems }) => alignItems || 'initial'};
  flex-wrap: ${({ wrap }) => wrap};
`;
