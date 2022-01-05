import { React, Component } from 'react';
import classes from './Numbers.module.css';
// eslint-disable-next-line react/prefer-stateless-function
class Numbers extends Component {
  render() {
    const numbers = Array.from(Array(10).keys());
    return (
      <div className={classes.div}>
        <ul className={classes.ul}>
          {numbers.map((el) => (el === 0 ? (
            <li key={el} className={classes.Zero}>
              {el}
            </li>
          ) : (
            <li key={el}>
              {el}
            </li>
          )))}
          <li className={classes.dot}>.</li>
        </ul>
      </div>
    );
  }
}

export default Numbers;
