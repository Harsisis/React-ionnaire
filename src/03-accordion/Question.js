import React from 'react';

// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import classes from './Question.module.css';

class Question extends React.Component {
  render() {
    return (
      <article className={classes.question}>
        <h4>{this.props.title}</h4>
        <p>{this.props.info}</p>
      </article>
    );
  }
}

export default Question;
