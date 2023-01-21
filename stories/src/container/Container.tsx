import React from 'react'
import PropTypes from 'prop-types'
import { ContainerProps } from '../types'
import './container.scss'

export const Container = ({
  children,
  size,
  className
}: ContainerProps) => {
  return (
    <div className={[className && className, 'container', size && `container--${size}`].join(' ')}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  className: PropTypes.string
}

Container.default = {
  className: ''
}
