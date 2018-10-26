import * as React from 'react';
import './FullWidthTitle.css';

type FullWidthTitleProps = {
  title: string;
  bgTheme?: 'lightGray' | 'lightBlue';
  subTitle?: string;
};

const FullWidthTitle: React.SFC<FullWidthTitleProps> = props => {
  return (
    <div className={`FullWidthTitle ${props.bgTheme}`}>
      <h1>{props.title}</h1>
      {props.subTitle ? <h2>{props.subTitle}</h2> : ''}
    </div>
  );
};

FullWidthTitle.defaultProps = {
  bgTheme: 'lightGray',
  subTitle: 'This is a test app',
  title: 'Some App'
};

export default FullWidthTitle;
