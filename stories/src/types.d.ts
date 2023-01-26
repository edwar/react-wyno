import { ReactNode, ReactElement} from 'react'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  buttonType?: 'primary' | 'outline' | 'text' | 'danger'
  /**
   * How large should the button be?
   */
  size?: 'default' | 'large' | 'small'
  /**
   * What is the position of the icon on the button?
   */
  iconPosition?: 'none' | 'leading' | 'tailing'
  /**
   * What is the icon
   */
  icon?: ReactElement
  /**
   * What will be the shape of the button?
   */
  shape?: 'rectangular' | 'semi-rounded' | 'rounded'
  /**
   * Is block
   */
  block?: boolean
  /**
   * Button contents
   */
  label: string
  /**
   * Background color to button
   */
  backgroundColor?: string
  /**
   * Color to button
   */
  color?: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

export interface InputProps {
  /**
   * How large should the input be?
   */
  size?: 'default' | 'large' | 'small'
  /**
   * What is the position of the icon on the input?
   */
  iconPosition?: 'none' | 'leading' | 'tailing'
  /**
   * What is the icon
   */
  icon?: ReactElement
  /**
   * Input label
   */
  label: string
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

export interface BlobProps extends HTMLAttributes<HTMLElement> {
  src?: string
  /**
   * 
   */
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
   * Default is undefined but you could set it to something like '2s'
   */
  delay?: string
  /**
   * Children
   */
  children: string | ReactNode
  /**
   * Default is 'infinite'
   */
  iterationCount?: 'infinite' | number
  /**
   * Top
   */
  top?: number
  /**
   * Right
   */
  right?: number
  /**
   * Bottom
   */
  bottom?: number
  /**
   * Left
   */
  left?: number
  /**
   * Background
   */
  background: string
}

export interface ShapeProps {
  size?: string | number
  radiusFirst: string
  radiusLast: string
  spinParams: string
  background: string
  /**
   * Top
   */
  top?: number
  /**
   * Right
   */
  right?: number
  /**
   * Bottom
   */
  bottom?: number
  /**
   * Left
   */
  left?: number
}

export interface IconProps {
  name: string
  color?: string
  size?: number
  strokeWidth?: number
  className?: string
}

export interface SwitchProps {
  color: string
  onChange: (boolean)=>void
  checked: boolean
  /**
   * How large should the button be?
   */
  size?: 'default' | 'large' | 'small'
}

export interface TooltipProps {
  delay?: number
  children: ReactNode
  direction?: 'top' | 'right' | 'bottom' | 'left'
  content: string
}

export interface CardProps {
  children: ReactNode | string
  description: ReactNode | string
}

export interface ContainerProps {
  children?: ReactNode
  className?: string
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export interface BoxProds {
  children: ReactNode
}

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type JustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'
type AlignItems = 'flex-start' | 'center' | 'flex-end'

export interface GridProps {
  children: ReactNode
  container?: boolean
  item?: boolean
  xs?: Cols
  sm?: Cols
  md?: Cols
  lg?: Cols
  spacing?: Spacing
  justifyContent?: JustifyContent
  alignItems?: AlignItems
}

export interface GridRulerProps {
  spacing?: Spacing
}