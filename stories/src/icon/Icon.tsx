import React from 'react'
import PropTypes from 'prop-types'
import { IconProps } from '../types'
import './icon.scss'
import { iconData } from './iconsWyno'

export const Icon = ({name, color, size, strokeWidth, className}: IconProps) => {
  const { d } = iconData.filter(item => item.name === name)[0]
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width={size}
      height={size}
      fill='none'
      className={className}
    >
      <path fill="none" d="M0 0h128v128H0z" />
      <path
        d={d}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number
}

Icon.default = {
  color: '#333',
  size: 15
}
