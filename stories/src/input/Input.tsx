import React from 'react'
import './input.scss'
import PropTypes from 'prop-types'
import { InputProps } from '../types'
import { Tooltip } from '../tooltip/Tooltip'
import { Icon } from '../icon/Icon'

export const Input = ({
  description,
  errorMessage,
  isError,
  label,
  name,
  icon,
  iconPosition,
  size,
  radius,
  ...props
}: InputProps) => {
  return (
    <div className='input'>
      <label className={['input--label', isError ? 'input--label__error': null].join(' ')} htmlFor={name}>{label}</label>
      {description && 
        <div className='input--description'>
          <Tooltip
            content={description}
            direction="right"
          >
            <Icon className='input--description__icon' name='check' color='#333' size={15} strokeWidth={6}/>
          </Tooltip>
          <div className='input--description__text'>
            {description}
          </div>
        </div>
      }
      <div className={['input--content', `input--${size}`, isError ? 'input--content__error': null, radius ? 'input--radius' : null].join(' ')}>
        {iconPosition === 'leading' && icon}
        <input className='input--content__input' name={name} {...props} />
        {iconPosition === 'tailing' && icon}
      </div>
      {isError && <div className='input--error'>{errorMessage}</div>}
    </div>
  )
}

Input.propTypes = {
  description: PropTypes.string,
  errorMessage: PropTypes.string,
  isError: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.element,
  iconPosition: PropTypes.string,
  size: PropTypes.string,
  radius: PropTypes.bool
}

Input.default = {
  description: '',
  errorMessage: '',
  isError: false,
  label: '',
  name: '',
  iconPosition: 'none',
  size: 'default',
  radius: true
}
