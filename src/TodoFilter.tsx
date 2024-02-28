import { ComponentPropsWithoutRef, ReactNode } from 'react';
import RadioGroup from './RadioGroup/RadioGroup';
import { HStack } from '../styled-system/jsx';
import RadioButton from './RadioGroup/RadioButton';
import { useAtom } from 'jotai';
import { ITodoFilter, filterAtom } from './atoms/todos';

type Value = ComponentPropsWithoutRef<'input'>['value'];

/**
 * Allows the user to select a filter for the todo-list.
 * @component
 * @returns A TodoFilter.
 */
export default function TodoFilter(): ReactNode {
  const [filter, set] = useAtom(filterAtom);
  const onValueChange = (newValue: Value) => {
    console.log('New filter', newValue);
    set(newValue as ITodoFilter);
  };

  return (
    <RadioGroup
      name='todo-filter'
      legend='Filter Todos'
      variant='soft'
      size='sm'
      color='info'
      defaultValue={filter}
      onValueChange={onValueChange}
    >
      <HStack gap='4'>
        <RadioButton label='All' value='all' />
        <RadioButton label='Completed' value='completed' />
        <RadioButton label='Pending' value='pending' />
      </HStack>
    </RadioGroup>
  );
}
