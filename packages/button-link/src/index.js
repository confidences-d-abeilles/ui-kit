import React from 'react';
import Link from '@cda/link';
import { Button } from '@cda/button';

const ButtonLink = ({ children, ...props }) => <Link {...props}><Button {...props}>{children}</Button></Link>;

export default ButtonLink;
