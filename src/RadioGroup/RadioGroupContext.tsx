import { createContext, ComponentPropsWithoutRef } from 'react';

type Value = ComponentPropsWithoutRef<'input'>['value'];
type Size = 'sm' | 'md' | 'lg';
type Color = 'primary' | 'info' | 'warning' | 'danger';

/**
 * RadioGroupContext Value
 */
export interface RadioGroupContextValue {
  /** name Name used to group the radio buttons in the group. */
  name: string;
  /** value Value to be selected when the radio button is mounted. @default null */
  value: Value | null;
  /** variant Visual style used for emphasis. @default 'surface' */
  variant: 'surface' | 'soft';
  /** size Size of the radio button @default 'md' */
  size: Size;
  /** color Visual style used for emphasising the intent of the control. @default primary  */
  color: Color;
  /** onChange Handler to be invoked when a radio button value changes. */
  onChange: (newValue: Value) => void;
}

const RadioGroupContext = createContext<RadioGroupContextValue>({
  name: '',
  variant: 'surface',
  color: 'primary',
  size: 'md',
  value: null,
  onChange: () => undefined,
});

export default RadioGroupContext;
