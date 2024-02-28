import { ComponentPropsWithoutRef, ReactNode, useContext } from 'react';
import RadioGroupContext from './RadioGroupContext';
import { visuallyHidden } from '../../styled-system/patterns';
import { Label } from './Label';
import { RadioButtonDot } from './RadioButtonDot';

type Value = ComponentPropsWithoutRef<'input'>['value'];

/**
 * RadioButton props
 */
export interface RadioButtonProps {
  /** value RadioButton value */
  value: Value;
  /** label RadioButton label */
  label: string;
}

/**
 * A RadioButton which is a part of a radio group.
 * @param props  RadioButton props: label, value
 * @component
 * @returns A label and radio input.
 */
export default function RadioButton(props: RadioButtonProps): ReactNode {
  const ctxValue = useContext(RadioGroupContext);
  const {
    name,
    color,
    value: selectedValue,
    onChange,
    variant,
    size,
  } = ctxValue;

  const { label, value } = props;
  const checked = value === selectedValue;
  return (
    <Label>
      <input
        data-testid='radio-button'
        type='radio'
        className={`radio-button ${visuallyHidden()}`}
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <RadioButtonDot
        size={size}
        checked={checked}
        variant={variant}
        color={color}
      />
      {label}
    </Label>
  );
}
