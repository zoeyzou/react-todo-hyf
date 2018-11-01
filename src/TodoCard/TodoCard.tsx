import * as React from 'react';
import FlexCard from 'src/FlexCard/FlexCard';
import './TodoCard.css';

type TodoCardProps = {
  id: number;
  date: string;
  todo: string;
  comment?: string;
  isComplete: boolean;
  onClick: (id: number) => void;
  onTodoDelete: (id: number) => void;
};

class TodoCard extends React.Component<TodoCardProps, {}> {
  public state = {
    isComplete: false
  };

  public onCardClick = () => {
    this.props.onClick(this.props.id);
  };

  public onCardDelete = () => {
    this.props.onTodoDelete(this.props.id);
  };

  public render() {
    const { date, todo, comment, isComplete } = this.props;
    return (
      <FlexCard>
        <div className={`TodoCard ${isComplete ? 'isComplete' : ''}`}>
          <div className="clear" onClick={this.onCardDelete}>
            X
          </div>
          <div className="date">
            <p>{date}</p>
          </div>
          <div className="todo" onClick={this.onCardClick}>
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
