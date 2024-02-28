import CheckedIcon from './Checked';
import { cva } from '../../styled-system/css';
import { ReactNode } from 'react';

const indicator = cva({
  base: {
    borderWidth: '2px',
    marginRight: '0.5rem',
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'default',
  },
  variants: {
    size: {
      sm: {
        borderRadius: '2.4px',
        width: '0.875rem',
        height: '0.875rem',
      },
      md: {
        borderRadius: '3px',
        width: '1rem',
        height: '1rem',
      },
      lg: {
        borderRadius: '3.75px',
        width: '1.25rem',
        height: '1.25rem',
      },
    },
    visual: {
      surface: {
        backgroundColor: 'white',
        borderColor: 'gray.300',

        _checked: {
          backgroundColor: 'indigo.500',
        },
      },
      soft: {
        backgroundColor: 'indigo.200',
        _checked: {
          backgroundColor: 'indigo.200',
          color: 'indigo.800',
          '& path': {
            fill: 'indigo.800',
            stroke: 'indigo.800',
          },
        },
      },
    },
    color: {
      primary: {
        backgroundColor: 'white',
        borderColor: 'gray.300',
        _checked: {
          backgroundColor: 'indigo.500',
          color: 'white',
        },
      },
      info: {
        backgroundColor: 'white',
        borderColor: 'gray.300',
        _checked: {
          backgroundColor: 'indigo.500',
          color: 'white',
        },
      },
      warning: {
        backgroundColor: 'white',
        borderColor: 'gray.300',
        _checked: {
          backgroundColor: 'orange.500',
          color: 'white',
        },
      },
      danger: {
        backgroundColor: 'white',
        borderColor: 'gray.300',
        _checked: {
          backgroundColor: 'rose.500',
          color: 'white',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    visual: 'surface',
    color: 'primary',
  },
  compoundVariants: [
    {
      visual: 'surface',
      color: 'primary',
      css: {
        backgroundColor: 'white',
        borderColor: 'gray.300',
        _checked: {
          borderColor: 'indigo.500',
          backgroundColor: 'indigo.500',
          color: '#fff',
        },
      },
    },
    {
      visual: 'surface',
      color: 'info',
      css: {
        backgroundColor: 'white',
        borderColor: 'gray.300',
        _checked: {
          borderColor: 'cyan.500',
          backgroundColor: 'cyan.500',
        },
      },
    },
    {
      visual: 'surface',
      color: 'warning',
      css: {
        backgroundColor: 'white',
        borderColor: 'gray.300',
        _checked: {
          borderColor: 'orange.500',
          backgroundColor: 'orange.500',
        },
      },
    },
    {
      visual: 'surface',
      color: 'danger',
      css: {
        borderColor: 'gray.300',
        backgroundColor: 'white',
        _checked: {
          borderColor: 'rose.500',
          backgroundColor: 'rose.500',
        },
      },
    },
    {
      visual: 'soft',
      color: 'primary',
      css: {
        backgroundColor: 'indigo.200', // accent-a5
        _checked: {
          backgroundColor: 'indigo.200',
          color: 'indigo.800',
        },
      },
    },
    {
      visual: 'soft',
      color: 'info',
      css: {
        backgroundColor: 'rgba(1, 180, 204, 0.29)',
        _checked: {
          color: 'rgb(16, 125, 152)', // accent-11
          backgroundColor: 'rgba(1, 180, 204, 0.29)', // accent-a5
        },
      },
    },
    {
      visual: 'soft',
      color: 'warning',
      css: {
        backgroundColor: 'rgba(255, 139, 0, 0.4)',
        _checked: {
          color: 'rgb(204, 78, 0)',
          backgroundColor: 'rgba(255, 139, 0, 0.4)',
        },
      },
    },
    {
      visual: 'soft',
      color: 'danger',
      css: {
        backgroundColor: 'rgba(210, 0, 68, 0.19)',
        _checked: {
          color: 'rgb(203,29,99)',
          backgroundColor: 'rgba(210, 0, 68, 0.19)',
        },
      },
    },
  ],
});

/**
 * Checkbox Indicator Props
 */
export interface ICheckboxIndicatorProps {
  /**
   * checked - Checkbox state.
   * @default false
   */
  checked: boolean;
  /**
   * variant Visual styling for describing the level of emphasis of the control.
   * @default surface
   */
  variant?: 'surface' | 'soft';
  /**
   * color Visual style representing the intent of the control.
   * @default primary
   */
  color?: 'primary' | 'info' | 'warning' | 'danger';
  /**
   * size Size of the control
   * @default md
   */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Checkbox Indicator.
 * @param props Checkbox Indicator Props.
 * @component
 * @returns A checkbox indicator with a checked icon.
 */
export default function Indicator(props: ICheckboxIndicatorProps): ReactNode {
  const {
    checked,
    variant = 'surface',
    color = 'primary',
    size = 'md',
  } = props;
  const cx = indicator({ visual: variant, color, size });

  return (
    <div
      data-testid='checkbox-indicator'
      data-checked={checked ? 'checked' : undefined}
      className={`${cx} checkbox-indicator`}
    >
      {checked ? (
        <CheckedIcon
          checked={checked}
          size={size}
          soft={variant === 'soft'}
          color={color}
        />
      ) : null}
    </div>
  );
}
