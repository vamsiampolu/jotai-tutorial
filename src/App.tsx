import { StrictMode } from 'react';
import { DevTools } from 'jotai-devtools';
import Counter from './Counter';

/**
 *
 */
export default function App() {
  return (
    <StrictMode>
      <DevTools />
      <Counter />
    </StrictMode>
  );
}
