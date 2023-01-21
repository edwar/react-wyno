import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './card.scss'
import { CardProps } from '../types'

export const Card = ({children, description}:CardProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.div transition={{ layout: { duration: 1, type: 'spring' }}} layout onClick={() => setIsOpen(!isOpen)} className='card' style={description ? { cursor: 'pointer' } : {}}>
      <motion.div transition={{ duration: 1 }} >
        {children}
      </motion.div>
      {isOpen &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {description}
        </motion.div>
      }
    </motion.div>
  )
}
