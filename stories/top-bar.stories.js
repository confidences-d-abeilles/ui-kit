import React from 'react';

import { storiesOf } from '@storybook/react';

import TopBar from '@cda/top-bar';

storiesOf('TopBar', module)
  .add('primary', () => (
      <TopBar>
        This is a example of top page bar !
      </TopBar>
  ));
