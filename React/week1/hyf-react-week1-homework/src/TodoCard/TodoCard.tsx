import * as React from 'react';
import FlexCard from 'src/FlexCard/FlexCard';
import './TodoCard.css';

type TodoCardProps = {
  date: string;
  todo: string;
  comment?: string;
};

type TodoCardState = {
  isComplete: boolean;
};

class TodoCard extends React.Component<TodoCardProps, TodoCardState> {
  public state = {
    isComplete: false
  };

  public onCardClick = () => {
    console.log('clikced');
    this.setState(prevState => ({ isComplete: !prevState.isComplete }));
  };

  public render() {
    const { date, todo, comment } = this.props;
    const { isComplete } = this.state;
    return (
      <FlexCard>
        <div
          className={`TodoCard ${isComplete ? 'isComplete' : ''}`}
          onClick={this.onCardClick}
        >
          <div className="date">
            <p>{date}</p>
          </div>
          <div className="todo">
            <p>{todo}</p>
          </div>
          {comment && (
            <div className="comment">
              <p>{comment}</p>
            </div>
          )}
        </div>
      </FlexCard>
    );
  }
}

export default TodoCard;
