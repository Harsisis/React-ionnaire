import React from 'react';

import Cell from './Cell';
import classes from './Grid.module.css';

class Grid extends React.Component {
  render() {
    return (
      <table>
        <tr className={classes.boardRow}>
          <Cell />
          <Cell />
          <Cell />
        </tr>
        <tr className={classes.boardRow}>
          <Cell />
          <Cell />
          <Cell />
        </tr>
        <tr className={classes.boardRow}>
          <Cell />
          <Cell />
          <Cell />
        </tr>
      </table>
    );
  }
}

export default Grid;
