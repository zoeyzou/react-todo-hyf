import * as React from 'react';
import './FlexCard.css';

type FlexCardProps = {
  children: React.ReactNode;
};

const FlexCard: React.SFC<FlexCardProps> = props => {
  return <div className="FlexCard">{props.children}</div>;
};

FlexCard.defaultProps = {
  children: <div>This is some test data</div>
};

export default FlexCard;
