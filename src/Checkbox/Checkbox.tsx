import { ChangeEvent, ReactNode, useState } from 'react';
import { visuallyHidden } from '../../styled-system/patterns';
import Indicator from './Indicator';
import { Label } from './Label';

/**
 * Checkbox Props
 */
export interface ICheckboxProps {
  /**
   * label Checkbox Label
   */
  label: string;
  /**
   * defaultChecked Initial Checkbox state on render.
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * onChange Change Hnadler. Invoked when the checkbox state changes.
   */
  onChange?: (checked: boolean) => void;
  /**
   * size Size of the control
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * variant Visual styling for describing the level of emphasis of the control.
   * @default 'surface'
   */
  variant?: 'surface' | 'soft';
  /**
   * color Visual style representing the intent of the control.
   * @default 'primary'
   */
  color?: 'primary' | 'info' | 'warning' | 'danger';
}

/**
 * Checkbox Form Control.
 * @param props Checkbox props.
 * @component
 * @returns A checkbox control with a label.
 */
export default function Checkbox(props: ICheckboxProps): ReactNode {
  const {
    label,
    defaultChecked = false,
    onChange: onChangeProp,
    size = 'md',
    variant = 'surface',
    color = 'primary',
  } = props;
  const [checked, setChecked] = useState(defaultChecked);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (onChangeProp) {
      onChangeProp(e.target.checked);
    }
  };

  return (
    <Label>
      <input
        data-testid='checkbox-input'
        type='checkbox'
        className={visuallyHidden()}
        checked={checked}
        onChange={onChange}
      />
      <Indicator
        size={size}
        variant={variant}
        color={color}
        checked={checked}
      />
      {label}
    </Label>
  );
}
