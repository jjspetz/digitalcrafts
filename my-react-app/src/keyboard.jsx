import React from 'react';
import Keyboard, {KeyboardButton, LatinLayout} from 'react-screen-keyboard';

var inputNode = this.props.input;

const screenKeyboard = ({inputNode, goBack, submit}) =>
  <Keyboard
    inputNode={inputNode}
    leftButtons={[
      <KeyboardButton
        onClick={goBack}
        value="Back"
      />
    ]}
    rightButtons={[
      <KeyboardButton
        onClick={submit}
        value="Submit"
        classes="keyboard-submit-button"
      />
    ]}
    layouts={[LatinLayout]}
  />

export default screenKeyboard;
