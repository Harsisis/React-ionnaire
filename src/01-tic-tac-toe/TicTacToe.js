import React from 'react';

import Grid from './Grid';
import PlayerTurn from './PlayerTurn';
import PlayerWin from './PlayerWin';
import classes from './TicTacToe.module.css';

function TicTacToe() {
  return (
    <div className={classes.game}>
      <PlayerTurn />
      <Grid />
      <PlayerWin />
    </div>
  );
}

export default TicTacToe;
