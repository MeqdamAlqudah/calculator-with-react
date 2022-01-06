import PropTypes from 'prop-types';
import React from 'react';
import classes from './CalculatorOperations.module.css';
// eslint-disable-next-line react/prefer-stateless-function
class CalculatorOperations extends React.Component {
  render() {
    const { onclick } = this.props;
    return (
      <div className={classes.div}>
        <ul className={classes.ul}>
          <li><button type="button" onClick={onclick} name="AC">AC</button></li>
          <li><button type="button" onClick={onclick} name="+/-">+/-</button></li>
          <li><button type="button" onClick={onclick} name="%">%</button></li>
        </ul>
      </div>
    );
  }
}

CalculatorOperations.propTypes = {
  onclick: PropTypes.func.isRequired,
};
export default CalculatorOperations;
