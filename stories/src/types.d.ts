import { HTMLAttributes } from 'react'
export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  buttonType?: 'primary' | 'outline' | 'text' | 'danger';
  /**
   * How large should the button be?
   */
  size?: 'default' | 'large' | 'small';
  /**
   * What is the position of the icon on the button?
   */
  iconPosition?: 'none' | 'leading' | 'tailing'
  /**
   * What is the icon
   */
  icon?: React.ReactElement
  /**
   * What will be the shape of the button?
   */
  shape?: 'rectangular' | 'semi-rounded' | 'rounded'
  /**
   * Is block
   */
  block: boolean
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export interface InputProps {
/**
 * How large should the input be?
 */
size?: 'default' | 'large' | 'small';
/**
 * What is the position of the icon on the input?
 */
iconPosition?: 'none' | 'leading' | 'tailing'
/**
 * What is the icon
 */
icon?: React.ReactElement
  /**
 * Input label
 */
  label: string;
  /**
  * Input description
  */
  description: string
  /**
  * Is error
  */
  isError: boolean
  /**
  * Error message
  */
  errorMessage: string
  /**
  * Input name
  */
  name: string
  /**
  * Is border radius
  */
  radius: boolean
}

export type BlobProps = {
  src?: string
  size?: string | number
  /**
   * Default is '15s'
   */
  duration?: string
  /**
   * Default is 'linear'
   */
  timingFunction?: 'ease' | 'linear' | 'ease-in-out'
  /**
   * Default is undefined, but you could set it to something like '2s'
   */
  delay?: string;
  /**
   * Default is 'infinite'
   */
  iterationCount?: 'infinite' | number;
} & HTMLAttributes<HTMLElement>

export interface ShapeProps {
  size?: string | number;
  radiusFirst: string;
  radiusLast: string;
  spinParams: string;
}

export interface IconProps {
  name: string,
  color: string,
  size: number,
  strokeWidth: number
}