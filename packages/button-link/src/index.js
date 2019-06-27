import React from 'react';
import Link from '@cda/link';
import { Button } from '@cda/button';

export default ({ children, ...props }) => <Link {...props}><Button>{children}</Button></Link>
