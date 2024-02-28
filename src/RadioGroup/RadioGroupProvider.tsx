import {
  ReactNode,
  useState,
  useEffect,
  ComponentPropsWithoutRef,
} from 'react';
import RadioGroupContext from './RadioGroupContext';

type Value = ComponentPropsWithoutRef<'input'>['value'];
type Color = 'primary' | 'info' | 'warning' | 'danger';

/**
 * Radio Group Provider Props
 */
export interface IRadioGroupProviderProps {
  /** name: Name of the radio button group. */
  name: string;
  /** defaultValue: Value checked by default */
  defaultValue: Value;
  /** color Visual style element used to emphasise intent of the control. @default 'primary' */
  color: Color;
  /** children: Radio Buttons */
  children: ReactNode;
  /** variant A Variant named surface | soft */
  variant: 'surface' | 'soft';
  /** size Size of a radio button in the group @default 'md' */
  size: 'sm' | 'md' | 'lg';
  onChange?: (newValue: Value) => void;
}

/**
 * A context wrapper for the Radio Button Group Provider, handles change event and default value.
 * @param props name and defaultValue (if any) for the RadioGroup
 * @component
 * @returns a Context Wrapper
 */
export default function RadioGroupProvider(props: IRadioGroupProviderProps) {
  const {
    children,
    name,
    defaultValue,
    variant,
    size,
    color,
    onChange: onChangeProp,
  } = props;
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const onChange = (newValue: Value) => {
    setValue(newValue);
    if (onChangeProp) {
      onChangeProp(newValue);
    }
  };

  const contextValue = {
    name,
    value,
    onChange,
    variant,
    size,
    color,
  };

  return (
    <RadioGroupContext.Provider value={contextValue}>
      {children}
    </RadioGroupContext.Provider>
  );
}
