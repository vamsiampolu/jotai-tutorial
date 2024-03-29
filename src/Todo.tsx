import { ReactNode } from 'react';
import Checkbox from './Checkbox/Checkbox';
import { Trash } from 'lucide-react';

/**
 * Props for an item in a  Todo List.
 */
export interface ITodoItem {
  /**
   * title Name and description of the task.
   */
  title: string;
  /**
   * completed Marks the todo as either completed or pending.
   */
  completed: boolean;
  /**
   * onDelete Invoked when the todo is deleted.
   */
  onDelete: (deleted: ITodoItem) => void;
  /**
   * updateTodoStatus Update the completed status of a todo.
   */
  updateTodoStatus: (todo: ITodoItem) => void;
}

/**
 * An item representing a single task in a Todo List.
 * @param  props Todo Item details.
 * @component
 * @returns A Todo List Item.
 */
export default function Todo(props: ITodoItem): ReactNode {
  const toggleCompleted = (checked: boolean) => {
    return props.updateTodoStatus({
      title: props.title,
      completed: checked,
    } as ITodoItem);
  };
  const onDeleteClick = () =>
    props.onDelete({
      title: props.title,
      completed: props.completed,
    } as ITodoItem);
  return (
    <div data-testid='todo'>
      <Checkbox
        label={props.title}
        defaultChecked={props.completed}
        onChange={toggleCompleted}
      >
        <Trash onClick={onDeleteClick} />
      </Checkbox>
    </div>
  );
}
