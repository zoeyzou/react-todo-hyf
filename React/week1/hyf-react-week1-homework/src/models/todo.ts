// type Todo = {
//   date: string;
//   todo: string;
//   isComplete: boolean;
//   comment?: string;
// }

export class Todo {
  constructor(
    public date: string,
    public todo: string,
    public isComplete: boolean = false,
    public comment?: string
  ) {}
}
