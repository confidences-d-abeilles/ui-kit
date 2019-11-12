import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import { storiesOf } from '@storybook/react';

import { Button } from '@cda/button';

import theme from '@cda/theme';

storiesOf('Button', module)
  .add('all', () => (
    <ThemeProvider theme={theme}>
      <Button primary>
        Example of primary button
      </Button>
      <Button>
        Example of secondary button
      </Button>
    </ThemeProvider>
  ));
