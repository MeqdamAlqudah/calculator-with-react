import PropTypes from 'prop-types';
import { React, Component } from 'react';
import classes from './SimpleOperations.module.css';
// eslint-disable-next-line react/prefer-stateless-function
class SimpleOperations extends Component {
  render() {
    const { onclick } = this.props;
    return (
      <div className={classes.div}>
        <ul className={classes.ul}>
          <li>
            {' '}
            <button type="button" onClick={onclick} name="÷">÷</button>
          </li>
          <li>
            {' '}
            <button type="button" onClick={onclick} name="x">x</button>
          </li>
          <li>
            {' '}
            <button type="button" onClick={onclick} name="-">-</button>
          </li>
          <li>
            {' '}
            <button type="button" onClick={onclick} name="+">+</button>
          </li>
          <li>
            {' '}
            <button type="button" onClick={onclick} name="=">=</button>
          </li>
        </ul>
      </div>
    );
  }
}
SimpleOperations.propTypes = {
  onclick: PropTypes.func.isRequired,
};
export default SimpleOperations;
