import { ReactNode } from 'react';
import { cva } from '../../styled-system/css';
import Icon from '../checked.svg?react';
import { center } from '../../styled-system/patterns';

const icon = cva({
  base: {
    verticalAlign: 'middle',
    overflow: 'visible',
  },
  variants: {
    size: {
      sm: {
        width: '0.5rem',
        height: '0.5rem',
      },
      md: {
        width: '0.625rem',
        height: '0.625rem',
      },
      lg: {
        width: '0.75rem',
        height: '0.75rem',
      },
    },
  },
});

/**
 * CheckedIcon Props
 */
export interface ICheckedIconProps {
  /**
   * size Size of the checkbox.
   * @default md
   */
  size?: 'sm' | 'md' | 'lg';

  /** checked Checkbox state */
  checked?: boolean;
  /**
   * soft Checkbox is of soft visual variant
   * @default false
   */
  soft?: boolean;
  /*
   * color Visual intent of the checkbox.
   * @default 'primary'
   */
  color?: 'primary' | 'info' | 'warning' | 'danger';
}

/**
 * Checkbox checked icon
 * @param props Checkbox icon props.
 * @component
 * @returns An svg icon to be displayed when a checkbox is checked.
 */
export default function CheckedIcon(props: ICheckedIconProps): ReactNode {
  const { size = 'md', checked, soft = false, color = 'primary' } = props;

  const colorMapping = {
    primary: 'indigo.800',
    info: 'cyan.800',
    warning: 'cyan.800',
    danger: 'cyan.800',
  };

  const softIconProps = soft
    ? {
        stroke: colorMapping[color],
        fill: colorMapping[color],
      }
    : {};

  console.log(softIconProps);

  const cx = `${icon({ size })} checked-icon`;

  const wrapperCx = center({
    inline: false,
    position: 'absolute',
    pointerEvents: 'none',
    height: '100%',
    width: '100%',
    color: 'white',
  });

  return (
    <span
      data-checked={checked ? 'checked' : null}
      data-testid='checkbox-icon-wrapper'
      className={`${wrapperCx} checkbox-icon-wrapper`}
    >
      <Icon data-testid="checkbox-icon" className={cx} {...softIconProps} />
    </span>
  );
}
