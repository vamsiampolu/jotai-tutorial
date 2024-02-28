import { atom } from 'jotai';
import { type PrimitiveAtom } from 'jotai';

/**
 * Props for an item in a  Todo List.
 */
export type ITodoItem = {
  /**
   * title Name and description of the task.
   */
  title: string;
  /**
   * completed Marks the todo as either completed or pending.
   */
  completed: boolean;
};

export type ITodoFilter = 'all' | 'completed' | 'pending';

export type ITodoFilterAtom = PrimitiveAtom<ITodoFilter>;

const initialTodos: ITodoItem[] = [];
export const todosAtom = atom<ITodoItem[]>(initialTodos);
export const filterAtom = atom<ITodoFilter>('all');

export const filteredTodos = atom<ITodoItem[]>((get) => {
  const items = get(todosAtom);
  const filterBy = get(filterAtom);
  switch (filterBy) {
    case 'all': {
      return items;
    }

    case 'completed': {
      return items.filter((item: ITodoItem) => item.completed);
    }

    case 'pending': {
      return items.filter((item) => !item.completed);
    }

    default:
      return items;
  }
});
