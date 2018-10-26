import * as React from 'react';
import FlexCard from 'src/FlexCard/FlexCard';
import './TodoCard.css';

type TodoCardProps = {
  date: string;
  todo: string;
  comment?: string;
};

const TodoCard: React.SFC<TodoCardProps> = props => {
  return (
    <FlexCard>
      <div className="TodoCard">
        <div className="date">
          <p>{props.date}</p>
        </div>
        <div className="todo">
          <p>{props.todo}</p>
        </div>
        {props.comment && (
          <div className="comment">
            <p>{props.comment}</p>
          </div>
        )}
      </div>
    </FlexCard>
  );
};

export default TodoCard;
