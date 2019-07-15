import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import { storiesOf } from '@storybook/react';

import TopBar from '@cda/top-bar';

import theme from '../theme';

storiesOf('TopBar', module)
  .add('primary', () => (
    <ThemeProvider theme={theme}>
      <TopBar>
        This is a example of top page bar !
      </TopBar>
    </ThemeProvider>
  ));
