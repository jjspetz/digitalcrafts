import React, {Component, PropTypes} from 'react';
import screenKeyboard from './keyboard';

export default class Input extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
  };

  static defaultProps = {
    value: '',
    onFocus: null,
  };

  handleInput = (event) => this.props.onChange(event.target.value);

  handleFocus = () => {
    if (this.props.onFocus) {
      this.props.onFocus(this.refs.input);
      // the `this.refs.input` value should be passed to the Keyboard component as inputNode prop
    }
  }

  render() {
    const {value} = this.props;

    return (
      <div>
        <input
          onInput={this.handleInput}
          value={value}
          onFocus={this.handleFocus}
          ref="input"
        />
        <screenKeyboard input={this.refs.input}/>
      </div>
    );
  }
}
