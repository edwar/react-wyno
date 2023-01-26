import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'
import { BlobProps, ShapeProps } from '../types'

const animation = keyframes`
  to {
    transform: rotate(1turn);
  }
`

const Shape = styled.div<ShapeProps>`
  position: absolute;
  transition: border-radius 1s ease-out;
  transform-origin: center;
  overflow: hidden;
  ${props => css`
    top: ${props.top ? props.top+'px': null};
    right: ${props.right ? props.right+'px': null};
    bottom: ${props.bottom ? props.bottom+'px': null};
    left: ${props.left ? props.left+'px': null};
    background-color: ${props.background};
    width: ${props.size};
    height: ${props.size};
    border-radius: ${props.radiusFirst};
    animation: ${keyframes`
      0% {
        border-radius: ${props.radiusFirst};
      }
      100% {
        border-radius: ${props.radiusLast};
      }
    `} ${(Math.random() * 10) | (0 + 10)}s ease-in-out infinite both alternate,
      ${animation} ${props.spinParams};
  `}
`

const ShapeContent = styled.div<{ spinParams: string }>`
  animation: ${animation} ${props => props.spinParams} reverse;
  transform-origin: center;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  transform: scale(1.25);
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const randomRadiuses = (x: number) =>
  new Array(x)
    .fill(1)
    .map(() => radiuses[(Math.random() * radiuses.length) | 0])
    .join(' ')
const radiuses = ['90%', '25%', '30%', '45%', '50%', '65%', '70%', '85%']
const makeRadiusFirst = () => randomRadiuses(4) + ' / ' + randomRadiuses(4)
const makeRadiusLast = () => randomRadiuses(3)

export const Blob = ({
  src,
  children,
  size,
  duration,
  timingFunction,
  delay,
  ...props
}: BlobProps) => {
  const radiusFirst = makeRadiusFirst()
  const radiusLast = makeRadiusLast()
  const spinParams = `${duration} ${timingFunction} ${delay} infinite`
  return (
    <Shape
      size={size}
      radiusFirst={radiusFirst}
      radiusLast={radiusLast}
      spinParams={spinParams}
      {...props}
    >
      <ShapeContent spinParams={spinParams}>
        {src ? <Image src={src}></Image> : children}
      </ShapeContent>
    </Shape>
  )
}

Blob.propTypes = {
  src: PropTypes.string,
  size: PropTypes.string,
  duration: PropTypes.string,
  timingFunction: PropTypes.string,
  top: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  delay: PropTypes.string
}

Blob.default = {
  duration: '50s',
  timingFunction: 'linear',
  delay: '1ms'
}