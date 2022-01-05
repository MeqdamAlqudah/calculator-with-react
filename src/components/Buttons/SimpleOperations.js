import { React, Component } from 'react';
import classes from './SimpleOperations.module.css';
// eslint-disable-next-line react/prefer-stateless-function
class SimpleOperations extends Component {
  render() {
    return (
      <div className={classes.div}>
        <ul className={classes.ul}>
          <li>÷</li>
          <li>×</li>
          <li>-</li>
          <li>+</li>
          <li>=</li>
        </ul>
      </div>
    );
  }
}

export default SimpleOperations;
