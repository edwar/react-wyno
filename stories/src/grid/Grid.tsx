import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import style from './Grid.module.scss'
import { GridProps } from '../types'

const Grid: FunctionComponent<GridProps & React.HTMLAttributes<HTMLDivElement>> = ({
  children, 
  container,
  item, 
  xs,
  sm,
  md,
  lg,
  spacing,
  justifyContent,
  alignItems,
  ...props
}) => {
  const classNames = cn({
    [style.Grid_container]: container,
    [style.Grid_item]: item,
    [style[`Grid_xs__${xs}`]]: xs,
    [style[`Grid_sm__${sm}`]]: sm,
    [style[`Grid_md__${md}`]]: md,
    [style[`Grid_lg__${lg}`]]: lg,
    [style[`Grid_spacing__${spacing}`]]: spacing,
    [style[`Grid_justifyContent__${justifyContent}`]]: justifyContent,
    [style[`Grid_alignItems__${alignItems}`]]: alignItems,
  })
  return (
    <div className={classNames} {...props}>{children}</div>
  )
}

Grid.propTypes = {}

export default Grid