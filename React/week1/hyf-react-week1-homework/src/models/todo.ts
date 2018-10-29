// type Todo = {
//   date: string;
//   todo: string;
//   isComplete: boolean;
//   comment?: string;
// }

export class Todo {
  constructor(
    public id: number,
    public date: string,
    public todo: string,
    public isComplete: boolean = false,
    public comment?: string
  ) {}
}

export const todos: Todo[] = [
  new Todo(1, 'Wed Sep 13 2017', 'Get out of bed'),
  new Todo(
    2,
    'Thu Sep 14 2017',
    'Brush teeth',
    false,
    'Surely you would need to brush teeth'
  ),
  new Todo(3, 'Fri Sep 15 2017', 'Eat breakfast')
];
