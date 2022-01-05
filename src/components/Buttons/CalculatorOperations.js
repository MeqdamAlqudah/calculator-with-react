import { React, Component } from 'react';
import classes from './CalculatorOperations.module.css';
// eslint-disable-next-line react/prefer-stateless-function
class CalculatorOperations extends Component {
  render() {
    return (
      <div className={classes.div}>
        <ul className={classes.ul}>
          <li>AC</li>
          <li>+/-</li>
          <li>%</li>
        </ul>
      </div>
    );
  }
}

export default CalculatorOperations;
