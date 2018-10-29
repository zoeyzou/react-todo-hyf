import * as React from 'react';
import './StandardInput.css';

type StandardInputProps = {
  buttonLabel: string;
  initialValue: string;
  inputHandler: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  clickHandler: () => void;
};

const StandardInput: React.SFC<StandardInputProps> = props => {
  return (
    <div className="StandardInput">
      <input
        type="text"
        value={props.initialValue}
        onChange={props.inputHandler}
      />
      <button onClick={props.clickHandler}>{props.buttonLabel}</button>
    </div>
  );
};

StandardInput.defaultProps = {
  buttonLabel: 'Add',
  initialValue: 'Please type in your todo'
};

export default StandardInput;
