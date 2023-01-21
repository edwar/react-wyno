import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './tooltip.scss'
import { TooltipProps } from '../types'

export const Tooltip = ({delay, children, direction, content}: TooltipProps) => {
  let timeout: string | number | NodeJS.Timeout | undefined 
  const [active, setActive] = useState(false)

  const showTooltip = () => {
    timeout = setTimeout(() => {
      setActive(true)
    }, delay || 400)
  }

  const hideTooltip = () => {
    clearInterval(timeout)
    setActive(false)
  }

  return (
    <div
      className='tooltip'
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {active && (
        <div className={`tooltip--tip tooltip--tip__${direction}`}>
          {content}
        </div>
      )}
    </div>
  )
}

Tooltip.propTypes = {
  delay: PropTypes.number,
  content: PropTypes.string,
  direction: PropTypes.string
}

Tooltip.default = {
  delay: 400,
  content: '',
  direction: 'bottom'
}
