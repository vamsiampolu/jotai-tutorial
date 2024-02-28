import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { css } from '../../styled-system/css';
import RadioGroupProvider from './RadioGroupProvider';

type Value = ComponentPropsWithoutRef<'input'>['value'];

/**
 * RadioGroupProps
 */
export interface IRadioGroupProps extends ComponentPropsWithoutRef<'fieldset'> {
  /**
   * color Purpose and visual style of the button.
   * @default 'primary'
   */
  color?: 'primary' | 'info' | 'warning' | 'danger';

  /**
   * name Name used to group radio buttons of the radio group
   */
  name: string;

  /**
   * legend Question and additional instructutions for completing the radio group
   */
  legend: string;

  /**
   * defaultValue Optional default value which will be selected when the radio group is rendered.
   */
  defaultValue?: Value;

  /**
   * variant Visual style used for emphasis.
   * @default 'surface'
   */
  variant?: 'surface' | 'soft';

  /**
   * size Size of each radio button in the group.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * onChange Event Handler invoked with the updated value when the selected value changes.
   */
  onValueChange?: (newValue: Value) => void;
}

/**
 * A RadioGroup that contains multiple radio buttons.
 * @param props Radio Group props, a name and an optional default value.
 * @component
 * @returns A fieldset with a legend that accepts children
 */
export default function RadioGroup(props: IRadioGroupProps): ReactNode {
  const {
    variant = 'surface',
    size = 'md',
    children,
    name,
    legend,
    defaultValue,
    color = 'primary',
    onValueChange,
  } = props;
  const fieldSetCx = css({
    padding: '1rem',
    borderRadius: '0.375rem',
    boxShadow: '0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  });

  const legendCx = css({
    fontSize: 'lg',
    fontWeight: 'semibold',
    lineHeight: 'relaxed',
    padding: 0,
  });

  return (
    <RadioGroupProvider
      name={name}
      defaultValue={defaultValue}
      variant={variant}
      size={size}
      color={color}
      onChange={onValueChange}
    >
      <fieldset data-testid='fieldset' className={`radio-group ${fieldSetCx}`}>
        <legend data-testid='legend' className={`legend ${legendCx}`}>
          {legend}
        </legend>
        {children}
      </fieldset>
    </RadioGroupProvider>
  );
}
