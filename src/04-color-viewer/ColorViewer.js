import React from 'react';

import classes from './ColorViewer.module.css';

function ColorViewer() {
  return (
    <>
      <h2>Color viewer</h2>
      <form>
        <input />
        <button type="submit">Submit</button>
      </form>
      <div className={classes.box} />
    </>
  );
}

export default ColorViewer;
