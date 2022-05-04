import React from 'react';

import classes from './Cell.module.css';
import Token from './Token';

class Cell extends React.Component {
  render() {
    return (
      <td className={classes.square}>
        <Token token="O" />
      </td>
    );
  }
}

export default Cell;
