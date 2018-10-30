import * as React from 'react';
import './StandardInput.css';

type StandardInputProps = {
  buttonLabel: string;
  initialValue: string;
  inputHandler: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  clickHandler: (e: React.FormEvent) => void;
  disableButton: boolean;
};

const StandardInput: React.SFC<StandardInputProps> = props => {
  console.log('disabled', props.disableButton);
  return (
    <form className="StandardInput">
      <input
        type="text"
        value={props.initialValue}
        onChange={props.inputHandler}
      />
      <button
        type="submit"
        disabled={props.disableButton}
        onClick={props.clickHandler}
      >
        {props.buttonLabel}
      </button>
    </form>
  );
};

StandardInput.defaultProps = {
  buttonLabel: 'Add',
  initialValue: 'Please type in your todo'
};

export default StandardInput;
