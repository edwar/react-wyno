import React, { ChangeEvent } from 'react'
import PropTypes from 'prop-types'
import { SwitchProps } from '../types'
import './switch.scss'

export const Switch = ({ size, color, onChange, checked }: SwitchProps) => {
  
  return (
    <label className={['switch', `switch--${size}`].join(' ')}>
      <input
        type='checkbox'
        checked={checked}
        onChange={(e:ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
      />
      <span className={['switch--slider', `switch--${size}`].join(' ')} style={{ backgroundColor: checked ? color : '#ccc' }} />
    </label>
  )
}

Switch.propTypes = {
  color: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  size: PropTypes.string,
}

Switch.default = {
  checked: false
}
