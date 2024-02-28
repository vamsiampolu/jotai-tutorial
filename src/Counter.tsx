import { css } from '../styled-system/css';
import { HStack } from '../styled-system/jsx';
import Button from './Button';
import { counter } from './atoms/counter';
import { useAtom } from 'jotai';

/**
 *
 */
export default function Counter() {
  const [count, setCounter] = useAtom(counter);
  const increment = () => setCounter((currentValue) => currentValue + 1);
  return (
    <HStack
      gap={6}
      alignItems='center'
      justify='center'
      className={css({ height: '100vh' })}
    >
      <span data-testid='count'>{count}</span>
      <Button size='lg' onClick={increment}>
        Click
      </Button>
    </HStack>
  );
}
