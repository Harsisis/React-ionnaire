import React from 'react';

import classes from './Accordion.module.css';
import data from './data';
import SingleQuestion from './Question';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: data,
    };
  }

  render() {
    return (
      <main className={classes.root}>
        <div className={classes.container}>
          <h3>questions and answers about login</h3>
          <section className={classes.info}>
            {this.state.questions.map((question) => {
              return <SingleQuestion key={question.id} {...question}></SingleQuestion>;
            })}
          </section>
        </div>
      </main>
    );
  }
}

export default Accordion;
