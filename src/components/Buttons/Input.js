import PropTypes from 'prop-types';
import { React, Component } from 'react';
import classes from './Input.module.css';
// eslint-disable-next-line react/prefer-stateless-function
class Input extends Component {
  render() {
    const { value } = this.props;
    return (<p className={classes.input}>{value}</p>);
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
};
export default Input;
