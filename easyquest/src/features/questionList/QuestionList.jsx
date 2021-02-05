import React from 'react';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import Header from '../../shared/components/Header';

export default () => (
  <Header>
    <Button variant="outlined">
      <Add className="button-icon" />
      NOVA
    </Button>
  </Header>
);
