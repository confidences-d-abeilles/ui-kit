import styled from '@emotion/styled';

export const Item = styled.div`
  padding: ${({ noGutter }) => (noGutter ? 0 : '1rem 5rem')};
  flex: ${({ flex }) => flex || '1 25rem'} ;
  align-self: ${({ alignSelf }) => alignSelf || 'center'};
  text-align: ${({ textAlign }) => textAlign};
`;

export const Columns = styled.div`
  display: flex;
  flex: 1 25rem;
  flex-direction: columns;
  justify-content: center;
  align-items: ${({ alignItems }) => alignItems || 'center'};
`;

export const Rows = styled.div`
  display: flex;
  flex-direction: rows;
  flex-wrap: wrap;
  justify-content: ${({ justifyContent }) => justifyContent || 'initial'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
`;
