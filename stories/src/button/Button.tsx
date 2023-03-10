import React from 'react'
import './button.scss'
import PropTypes from 'prop-types'
import { ButtonProps } from '../types'

export const Button = ({
  buttonType,
  size,
  iconPosition,
  icon,
  shape,
  block,
  label,
  backgroundColor,
  color,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={['button', `button--${size}`, `button--${buttonType}`, `button--${shape}`, block ? 'button--block' : null].join(' ')}
      style={{backgroundColor, color, borderColor: buttonType==='primary' ? color : '' } }
      {...props}
    >
      <div className='button--content'>
        {iconPosition==='leading' && icon}
        {label}
        {iconPosition==='tailing' && icon}
      </div>
    </button>
  )
}

Button.propTypes = {
  buttonType: PropTypes.string,
  size: PropTypes.string,
  iconPosition: PropTypes.string,
  icon: PropTypes.element,
  shape: PropTypes.string,
  block: PropTypes.bool,
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  buttonType: 'primary',
  size: 'default',
  iconPosition: 'none',
  shape: 'rectangular',
  block: false
}
