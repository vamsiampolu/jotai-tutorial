import {
  ComponentPropsWithoutRef,
  useState,
  ChangeEvent,
  FormEvent,
} from 'react';
import { css } from '../styled-system/css';

/**
 * Input Props
 */
export type InputProps = ComponentPropsWithoutRef<'input'> & {
  /**
   * label Label for the input
   */
  label: string;
  /**
   * onCreate Handler to be invoked when a todo is created.
   */
  onCreate: (newValue: string) => void;
};

const inputStyle = {
  boxShadow: '0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'gray.300',
  borderRadius: '0.375rem',
  width: '100%',
  maxWidth: '15rem',
  _focus: {
    outline: 'none',
    borderColor: 'indigo.500',
    boxShadow:
      'white 0px 0px 0px 0px, indigo.500/50 0px 0px 0px 2px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
  },
};

/**
 * A Form with a label and input.
 * @param props Input component props.
 * @component
 * @returns A Form component with Input and Label.
 */
export default function Input(props: InputProps) {
  const { id, label, value: initialValue = '', onCreate } = props;
  const [value, setValue] = useState(initialValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onCreate(value as string);
  };

  return (
    <form
      data-testid='input-form'
      className={css({
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        alignItems: 'center',
      })}
      onSubmit={onSubmit}
    >
      <label
        data-testid='form-input-label'
        className={css({ display: 'block' })}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        data-testid='form-input'
        className={`${css(inputStyle)} create-todo`}
        type='text'
        id={id}
        value={value}
        onChange={onChange}
      />
    </form>
  );
}
