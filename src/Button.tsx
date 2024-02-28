import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cva } from '../styled-system/css';

/**
 *
 * Button properties
 */
export interface IButtonProps extends ComponentPropsWithoutRef<'button'> {
  /**
   * color Purpose and visual style of the button
   * @default 'primary'
   */
  color?: 'primary' | 'info' | 'warning' | 'danger';
  /**
   * size Size of the button
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * variant Level of emphasis of the button based on the context.
   * @default 'solid'
   */
  variant?: 'solid' | 'soft' | 'surface';
}

export const button = cva({
  base: {
    appearance: 'none',
    border: 'none',
    cursor: 'default',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    fontWeight: 'medium',
    margin: 0,
    userSelect: 'none',
    verticalAlign: 'top',
  },
  variants: {
    color: {
      primary: {
        bg: 'indigo.500',
        color: 'white',
        _active: {
          bg: 'indigo.800',
        },
        _focusVisible: {
          outlineColor: 'indigo.400',
          outlineStyle: 'solid',
          outlineWidth: '2px',
          outlineOffset: '2px',
        },
        _hover: {
          bg: 'indigo.600',
        },
      },
      info: {
        bg: 'cyan.500',
        color: 'white',
        _active: {
          bg: 'cyan.800',
        },

        _focusVisible: {
          outlineColor: 'cyan.400',
          outlineStyle: 'solid',
          outlineWidth: '2px',
          outlineOffset: '2px',
        },
        _hover: {
          bg: 'cyan.600',
        },
      },
      warning: {
        bg: 'orange.500',
        color: 'white',
        _active: {
          bg: 'orange.800',
        },

        _focusVisible: {
          outlineColor: 'orange.400',
          outlineStyle: 'solid',
          outlineWidth: '2px',
          outlineOffset: '2px',
        },
        _hover: {
          bg: 'orange.600',
        },
      },
      danger: {
        bg: 'rose.500',
        color: 'white',
        _active: {
          bg: 'rose.800',
        },

        _focusVisible: {
          outlineColor: 'rose.400',
          outlineStyle: 'solid',
          outlineWidth: '2px',
          outlineOffset: '2px',
        },
        _hover: {
          bg: 'rose.600',
        },
      },
    },
    size: {
      sm: {
        borderRadius: 'xs',
        fontSize: 'xs',
        gap: '0.25rem',
        height: '1.5rem',
        lineHeight: '1rem',
        letterSpacing: '0.0025em',
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
      },
      md: {
        borderRadius: 'sm',
        fontSize: 'sm',
        gap: '0.5rem',
        height: '2rem',
        lineHeight: 'normal',
        letterSpacing: 0,
        paddingLeft: '0.75rem',
        paddingRight: '0.75rem',
      },
      lg: {
        borderRadius: 'md',
        fontSize: 'md',
        gap: '0.75rem',
        height: '2.5rem',
        lineHeight: 'normal',
        letterSpacing: 0,
        paddingLeft: '1rem',
        paddingRight: '1rem',
      },
    },
    visual: {
      solid: {},
      soft: {},
      surface: {},
    },
    disabled: {
      true: {
        backgroundColor: 'gray.400',
        color: 'gray.200',
        cursor: 'not-allowed',
        opacity: 0.5,
      },
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      visual: 'soft',
      css: {
        backgroundColor: 'indigo.200',
        color: 'indigo.900',
        _active: {
          backgroundColor: 'indigo.600',
          color: 'white',
        },
        _hover: {
          backgroundColor: 'indigo.300',
          color: 'white',
          outlineWidth: '2px',
          outlineColor: 'indigo.500',
          outlineStyle: 'solid',
          outlineOffset: '-1px',
        },
      },
    },
    {
      color: 'primary',
      visual: 'surface',
      css: {
        backgroundColor: 'white',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'indigo.600',
        color: 'indigo.600',
        _active: {
          backgroundColor: 'indigo.100',
          boxShadow: 'inset 0 0 0 1px',
          boxShadowColor: 'indigo.500',
        },
        _hover: {
          backgroundColor: 'indigo.600',
          boxShadow: 'inset 0 0 0 1px',
          boxShadowColor: 'indigo.500',
          color: 'white',
        },
      },
    },
    {
      color: 'info',
      visual: 'soft',
      css: {
        backgroundColor: 'cyan.200',
        color: 'cyan.900',
        _active: {
          backgroundColor: 'cyan.600',
        },
        _hover: {
          backgroundColor: 'cyan.300',
          outlineWidth: '2px',
          outlineColor: 'cyan.500',
          outlineStyle: 'solid',
          outlineOffset: '-1px',
        },
      },
    },
    {
      color: 'info',
      visual: 'surface',
      css: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'cyan.600',
        color: 'cyan.600',
        _active: {
          backgroundColor: 'cyan.100',
          boxShadow: 'inset 0 0 0 1px',
          boxShadowColor: 'cyan.500',
        },
        _hover: {
          backgroundColor: 'cyan.600',
          boxShadow: 'inset 0 0 0 1px',
          boxShadowColor: 'cyan.500',
          color: 'white',
        },
      },
    },
    {
      color: 'warning',
      visual: 'soft',
      css: {
        backgroundColor: 'orange.200',
        color: 'orange.900',
        _active: {
          backgroundColor: 'orange.600',
        },
        _hover: {
          backgroundColor: 'orange.300',
          outlineWidth: '2px',
          outlineColor: 'orange.500',
          outlineStyle: 'solid',
          outlineOffset: '-1px',
        },
      },
    },
    {
      color: 'warning',
      visual: 'surface',
      css: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'orange.600',
        color: 'orange.600',
        _active: {
          backgroundColor: 'orange.100',
          boxShadow: 'inset 0 0 0 1px',
          boxShadowColor: 'orange.500',
        },
        _hover: {
          backgroundColor: 'orange.600',
          boxShadow: 'inset 0 0 0 1px',
          boxShadowColor: 'orange.500',
          color: 'white',
        },
      },
    },
    {
      color: 'danger',
      visual: 'soft',
      css: {
        backgroundColor: 'rose.200',
        color: 'rose.900',
        _active: {
          backgroundColor: 'rose.600',
        },
        _hover: {
          backgroundColor: 'rose.300',
          outlineWidth: '2px',
          outlineColor: 'rose.500',
          outlineStyle: 'solid',
          outlineOffset: '-1px',
        },
      },
    },
    {
      color: 'danger',
      visual: 'surface',

      css: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'rose.600',
        color: 'rose.600',
        _active: {
          backgroundColor: 'rose.100',
          boxShadow: 'inset 0 0 0 1px',
          boxShadowColor: 'rose.500',
          color: 'white',
        },
        _hover: {
          backgroundColor: 'rose.600',
          boxShadow: 'inset 0 0 0 1px',
          boxShadowColor: 'rose.500',
          color: 'white',
        },
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
    visual: 'solid',
  },
});

/**
 * A button component for user interactions.
 * @component
 * @param  props Props for the button component
 * @returns A button component
 */
export default function Button(props: IButtonProps): ReactNode {
  const {
    children,
    className = '',
    size = 'md',
    color = 'primary',
    variant: visual = 'solid',
    ...btnProps
  } = props;
  const baseClassName = `btn-${color}-${visual}`;
  return (
    <button
      data-testid='button'
      className={`${button({ size, color, visual })} ${baseClassName} ${className}`.trim()}
      {...btnProps}
    >
      {children}
    </button>
  );
}
