import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

const AutoCompleteReact = () => {
  const top100Films = [
    'dfeq',
    'dewfefqw',
    'efewfqwfdewrthr',
    'frgeghwrwfreggrthtyjuk',
  ];
  return (
    <Autocomplete
      disableCloseOnSelect
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
};

export default AutoCompleteReact;
