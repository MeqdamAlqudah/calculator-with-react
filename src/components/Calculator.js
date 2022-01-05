import { React, Component } from 'react';
import CalculatorOperations from './Buttons/CalculatorOperations';
import Numbers from './Buttons/Numbers';
import SimpleOperations from './Buttons/SimpleOperations';
import classes from './Calculator.module.css';
import Input from './Buttons/Input';
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
