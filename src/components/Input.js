import { React, Component } from 'react';
import classes from './Input.module.css';
// eslint-disable-next-line react/prefer-stateless-function
class Input extends Component {
  render() {
    return (<input type="number" className={classes.input} />);
  }
}

export default Input;
