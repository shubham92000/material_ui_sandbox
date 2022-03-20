import React, { useEffect, useState } from 'react';
import { Checkbox, Button } from '@mui/material';

const CheckBoxReact = () => {
  const [allNames, setAllNames] = useState([]);
  const [state, setState] = React.useState({
    check1: true,
    check2: false,
    check3: false,
    check4: true,
  });

  const handleChange = (event) => {
    console.log(event.target);
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    if (event.target.checked) {
      // add
      // let present = false;
      // for (const name in allNames) {
      //   if (name === event.target.name) {
      //     present = true;
      //   }
      // }
      // if (!present) {
      //   setAllNames([...allNames, event.target.name]);
      // }

      setAllNames((allNames) =>
        allNames.filter((name) => name === event.target.name)
      );
      setAllNames([...allNames, event.target.name]);
    } else {
      // filter
      setAllNames((allNames) =>
        allNames.filter((name) => name !== event.target.name)
      );
    }
  };

  const { check1, check2, check3, check4 } = state;

  useEffect(() => {
    let idx = 1;
    for (const [key, value] of Object.entries(state)) {
      if (value) {
        setAllNames([...allNames, `check${idx}`]);
      }
    }
  }, []);

  return (
    <>
      <Checkbox
        checked={check1}
        onChange={handleChange}
        name="check1"
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Checkbox
        checked={check2}
        onChange={handleChange}
        name="check2"
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Checkbox
        checked={check3}
        onChange={handleChange}
        name="check3"
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Checkbox
        checked={check4}
        onChange={handleChange}
        name="check4"
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Button
        onClick={() => {
          console.log(allNames);
        }}
      >
        Click
      </Button>
    </>
  );
};

export default CheckBoxReact;
