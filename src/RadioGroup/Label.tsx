import { ReactNode } from 'react';
import { css } from '../../styled-system/css';

/**
 * Label Props
 */
interface LabelProps {
  /** children Children */
  children: ReactNode;
}

/**
 * Label for a radio button.
 * @component
 * @param props  Label props
 * @param props.children Children
 * @returns A Label used by a radio button.
 */
export function Label({ children }: LabelProps): ReactNode {
  const labelCx = css({
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
  });
  return (
    <label
      data-testid='radio-button-label'
      className={`radio-button-label ${labelCx}`}
    >
      {children}
    </label>
  );
}
