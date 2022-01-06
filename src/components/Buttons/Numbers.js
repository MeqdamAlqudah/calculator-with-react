import PropTypes from 'prop-types';
import { React, Component } from 'react';
import classes from './Numbers.module.css';
// eslint-disable-next-line react/prefer-stateless-function
class Numbers extends Component {
  render() {
    const numbers = Array.from(Array(10).keys());
    numbers.reverse();
    const { onclick } = this.props;
    return (
      <div className={classes.div}>
        <ul className={classes.ul}>
          {numbers.map((el) => (el === 0 ? (
            <li key={el} className={classes.Zero}>
              <button type="button" onClick={onclick} name={el}>{el}</button>
            </li>
          ) : (
            <li key={el}>
              <button type="button" onClick={onclick} name={el}>{el}</button>
            </li>
          )))}
          <button className={classes.dot} type="button" onClick={onclick} name=".">.</button>
        </ul>
      </div>
    );
  }
}

Numbers.propTypes = {
  onclick: PropTypes.func.isRequired,
};
export default Numbers;
