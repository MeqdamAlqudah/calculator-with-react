import { React, Component } from 'react';
import CalculatorOperations from './CalculatorOperations';
import Numbers from './Numbers';
import SimpleOperations from './SimpleOperations';
import classes from './Calculator.module.css';
import Input from './Input';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <div className={classes.container}>
        <Input />
        <CalculatorOperations />
        <Numbers />
        <SimpleOperations />
      </div>
    );
  }
}

export default Calculator;
