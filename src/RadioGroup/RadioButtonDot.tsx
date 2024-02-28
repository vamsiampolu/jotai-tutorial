import { ReactNode } from 'react';
import { cva } from '../../styled-system/css';

const dotWrapper = cva({
  base: {
    borderWidth: '2px',
    backgroundColor: 'white',
    borderColor: 'gray.300',
    borderStyle: 'solid',
    borderRadius: '9999px',
    // layout:
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1.5rem',
    height: '1.5rem',
    marginRight: '0.5rem',
  },
  variants: {
    size: {
      sm: { width: '1rem', height: '1rem' },
      md: { width: '1.5rem', height: '1.5rem' },
      lg: { width: '2rem', height: '2rem' },
    },
    visual: {
      surface: {
        backgroundColor: 'white',
        borderColor: 'gray.300',
        _checked: {
          borderColor: 'indigo.500',
          backgroundColor: 'indigo.500',
        },
      },
      soft: {
        flexShrink: 0,
        _checked: {
          backgroundColor: 'white',
          borderColor: 'gray.300',
        },
      },
    },
    color: {
      primary: {
        backgroundColor: 'white',
        borderColor: 'gray.300',
      },
      info: {
        backgroundColor: 'white',
        borderColor: 'gray.300',
      },
      warning: {
        backgroundColor: 'white',
        borderColor: 'gray.300',
      },
      danger: {
        backgroundColor: 'white',
        borderColor: 'gray.300',
      },
    },
  },
  defaultVariants: {
    visual: 'surface',
    color: 'primary',
    size: 'md',
  },
  compoundVariants: [
    {
      visual: 'surface',
      color: 'primary',
      css: {
        _checked: {
          borderColor: 'indigo.500',
          backgroundColor: 'indigo.500',
        },
      },
    },
    {
      visual: 'surface',
      color: 'info',
      css: {
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
        _checked: {
          borderColor: 'rose.500',
          backgroundColor: 'rose.500',
        },
      },
    },
  ],
});

const radioDot = cva({
  base: {
    borderRadius: '9999px',
    width: '1rem',
    height: '1rem',
  },
  variants: {
    size: {
      sm: { width: '0.5rem', height: '0.5rem' },
      md: { width: '0.75rem', height: '0.75rem' },
      lg: { width: '1rem', height: '1rem' },
    },
    color: {
      primary: {},
      info: {},
      warning: {},
      danger: {},
    },
    visual: {
      surface: {
        backgroundColor: 'white',
        _checked: {
          backgroundColor: 'indigo.200',
        },
      },
      soft: {
        transition: 'transform 150ms ease-out',
        backgroundColor: 'indigo.500',
        transform: 'scaleX(0) scaleY(0)',
        _checked: {
          transform: 'scaleX(1) scaleY(1)',
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
      visual: 'soft',
      color: 'primary',
      css: {
        backgroundColor: 'indigo.500',
        transform: 'scaleX(0) scaleY(0)',
        _checked: {
          transform: 'scaleX(1) scaleY(1)',
        },
      },
    },
    {
      visual: 'surface',
      color: 'primary',
      css: {
        backgroundColor: 'white',
        _checked: {
          backgroundColor: 'indigo.200',
        },
      },
    },
    {
      visual: 'soft',
      color: 'info',
      css: {
        backgroundColor: 'cyan.500',
        transform: 'scaleX(0) scaleY(0)',
        _checked: {
          transform: 'scaleX(1) scaleY(1)',
        },
      },
    },
    {
      visual: 'surface',
      color: 'info',
      css: {
        backgroundColor: 'white',
        _checked: {
          backgroundColor: 'cyan.200',
        },
      },
    },
    {
      visual: 'soft',
      color: 'warning',
      css: {
        backgroundColor: 'orange.500',
        transform: 'scaleX(0) scaleY(0)',
        _checked: {
          transform: 'scaleX(1) scaleY(1)',
        },
      },
    },
    {
      visual: 'surface',
      color: 'warning',
      css: {
        backgroundColor: 'white',
        _checked: {
          backgroundColor: 'orange.200',
        },
      },
    },
    {
      visual: 'surface',
      color: 'danger',
      css: {
        backgroundColor: 'white',
        _checked: {
          backgroundColor: 'rose.200',
        },
      },
    },
    {
      visual: 'soft',
      color: 'danger',
      css: {
        backgroundColor: 'rose.500',
        transform: 'scaleX(0) scaleY(0)',
        _checked: {
          transform: 'scaleX(1) scaleY(1)',
        },
      },
    },
  ],
});

/**
 * RadioButtonDotProps
 */
export interface RadioButtonDotProps {
  /** checked true if radio button is checked, false when unchecked. @default false */
  checked?: boolean;
  /** color Visual intent of the radio button. @default 'primary' */
  color?: 'primary' | 'info' | 'warning' | 'danger';
  /** variant Visual styling to indicate emphasis. @default 'surface' */
  variant?: 'surface' | 'soft';
  /** size Size of the radio button control */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * RadioButton dot indicator
 * @param props RadioButton Dot Props A `{checked}` property to indicate if the dot should be filled or not.`
 * @component
 * @returns A radio button dot component.
 */
export function RadioButtonDot(props: RadioButtonDotProps): ReactNode {
  const {
    checked = false,
    color: intent = 'primary',
    variant = 'surface',
    size = 'md',
  } = props;

  const wrapperCx = dotWrapper({ visual: variant, color: intent, size });
  const dotCx = radioDot({ visual: variant, color: intent, size });

  return (
    <div
      data-testid='radio-button-indicator'
      data-checked={checked ? checked : undefined}
      className={wrapperCx}
    >
      <div data-checked={checked ? checked : undefined} className={dotCx}></div>
    </div>
  );
}
