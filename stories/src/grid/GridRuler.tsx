import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import style from './GridRuler.module.scss'
import cn from 'classnames'
import { GridRulerProps } from '../types'

const GridRuler: FunctionComponent<GridRulerProps> = ({
  spacing
}) => {
  const classNames = cn(style.GridRuler, {
    [style[`GridRuler_spacing__${spacing}`]]: spacing
  })
  return (
    <div className={classNames}>{
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(number => (
        <div className={style.GridRuler_item} key={number} />
      ))
    }</div>
  )
}

GridRuler.propTypes = {}

export default GridRuler