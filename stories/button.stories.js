import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import { storiesOf } from '@storybook/react';

import { Button } from '@cda/button';

import theme from '@cda/theme';

storiesOf('Button', module)
  .add('primary', () => (
    <ThemeProvider theme={theme}>
      <Button primary>
        Example button
      </Button>
    </ThemeProvider>
  ))
  .add('secondary', () => (
    <ThemeProvider theme={theme}>
      <Button>
        Example button
      </Button>
    </ThemeProvider>
  ));
