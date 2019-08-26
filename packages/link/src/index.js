import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyleLink = styled(Link)`
  cursor: pointer;
  color: black;
  text-decoration: none;
`;

const StyledAnchor = styled('a')`
  color: black;
  text-decoration: none;
`;

const MyLink = ({
                  to,
                  external,
                  className,
                  children,
                  'data-cy': dataCy,
                }) => (external ? (
  <StyledAnchor
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    data-cy={dataCy}
    className={className}
  >
    {children || url}
    &nbsp;
  </StyledAnchor>
) : <StyleLink to={to} className={className} data-cy={dataCy}>{children || to}</StyleLink>);

MyLink.propTypes = {
  external: PropTypes.bool,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

MyLink.defaultProps = {
  external: false,
  className: null,
  children: null,
};

export default MyLink;
