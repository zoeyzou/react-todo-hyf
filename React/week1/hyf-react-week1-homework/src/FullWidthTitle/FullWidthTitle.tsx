import * as React from 'react';
import './FullWidthTitle.css';

type FullWidthTitleProps = {
  title: string;
  bgTheme?: 'gray' | 'lightBlue';
  subTitle?: string;
  component?: React.ReactNode;
};

const FullWidthTitle: React.SFC<FullWidthTitleProps> = props => {
  return (
    <div className={`FullWidthTitle ${props.bgTheme}`}>
      <h1>{props.title}</h1>
      {props.subTitle ? <h2>{props.subTitle}</h2> : ''}
      {props.component && <div>{props.component}</div>}
    </div>
  );
};

FullWidthTitle.defaultProps = {
  bgTheme: 'gray',
  component: <span />,
  subTitle: 'This is a test app',
  title: 'Some App'
};

export default FullWidthTitle;
