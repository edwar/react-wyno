import React, { FunctionComponent, ReactNode } from 'react'
import PropTypes from 'prop-types'
import style from './Box.module.scss'
import { BoxProds } from '../types'

const Box: FunctionComponent<BoxProds> = ({ children }) => {
  return (
    <div className={style.Box}>{children}</div>
  )
}

Box.propTypes = {}

export default Box