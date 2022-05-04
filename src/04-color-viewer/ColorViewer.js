import React, {useState} from 'react';

import classes from './ColorViewer.module.css';
import { BlockPicker } from 'react-color';

function ColorViewer() {
  const [state, setState] = useState("#000");
  const handleChangeComplete = (color) => {
    setState(color.hex);
    console.log(state);
  };
  const colorStyle= {
    backgroundColor: {state},
  }
  return (
    <div>
      <h2>Color viewer</h2>
      <form>
        <BlockPicker
          color={ state }
          onChangeComplete={ handleChangeComplete }
        />
      </form>
      <div className={classes.box} style={colorStyle}></div>
    </div>
  );
}

export default ColorViewer;
