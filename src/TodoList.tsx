import {useAtomValue, useSetAtom} from 'jotai';
import TodoFilter from './TodoFilter';
import Input from './Input';
import Todo from './Todo';
import { VStack } from '../styled-system/jsx';
import {ITodoItem, filteredTodos, todosAtom} from './atoms/todos';


  const createTodoWithUpdatedStatus = ({ updatedStatus, item}: {updatedStatus: boolean; item: ITodoItem}) => {
    return {
      title: item.title,
      completed: updatedStatus
    };
  }

  const isItem = (item: ITodoItem, searchItem: ITodoItem) => item.title === searchItem.title;

export default function TodoList() {
  const todos = useAtomValue(filteredTodos);
  const setTodos = useSetAtom(todosAtom);

  const createTodo = (title: string) => {
    const completed = false;
    setTodos((prev: ITodoItem[]) => ([...prev, {
      title,
      completed
    }] as ITodoItem[]));
  };

  const deleteTodo = (deleted: ITodoItem) => {
    setTodos((current: ITodoItem[]) => current.filter((item) => !isItem(item, deleted)));
  };


  const updateTodoStatus = (updated: ITodoItem) => {
    setTodos((current) => {
      return current.map((item: ITodoItem) => {
        if (isItem(item, updated)) {
          return createTodoWithUpdatedStatus({ item, updatedStatus: updated.completed }) as ITodoItem;
        }
        return item;
      });
    })
  };

  return <VStack gap='4'>
    <Input onCreate={createTodo} label='Create:' />
    <TodoFilter />
    <VStack gap='2'>
      {todos.map(todo => <Todo title ={todo.title} completed={todo.completed} onDelete={deleteTodo} updateTodoStatus={updateTodoStatus} />)}
    </VStack>
  </VStack>
}

