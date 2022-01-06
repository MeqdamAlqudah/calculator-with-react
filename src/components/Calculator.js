import React from 'react';
import CalculatorOperations from './Buttons/CalculatorOperations';
import Numbers from './Buttons/Numbers';
import SimpleOperations from './Buttons/SimpleOperations';
import classes from './Calculator.module.css';
import Input from './Buttons/Input';
import calculate from './logic/calculate';
// import calculate from './logic/calculate';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { calc: {}, innerText: '' };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    const { calc } = this.state;
    const buttonName = e.target.name;
    const newCalc = calculate(calc, buttonName);
    this.setState({ calc: newCalc, innerText: `${newCalc.next ? newCalc.next : ''} ${newCalc.operation ? newCalc.operation : ''} ${newCalc.total ? newCalc.total : ''}` });
  }

  render() {
    // const finallClaultaions = (total, operation, next) => {
    //   calculate({ total, next, operation });
    // };
    const { innerText } = this.state;
    return (
      <div className={classes.container}>
        <Input value={innerText} />
        <CalculatorOperations onclick={this.changeHandler} />
        <Numbers onclick={this.changeHandler} />
        <SimpleOperations onclick={this.changeHandler} />
      </div>
    );
  }
}

export default Calculator;
