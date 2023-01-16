import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tooltip } from './Tooltip'
import { Button } from '../button/Button'

export default {
  title: 'Tooltip',
  component: Tooltip,
  args: {},
  argTypes: {}
} as unknown as ComponentMeta<typeof Tooltip>


const Template: ComponentStory<typeof Tooltip> = (args) => {
  return (
    <div style={{ display: 'flex', width: '100%', height: '255px', justifyContent: 'center', alignItems: 'center'}}>
      <Tooltip {...args}>
        <Button label='Hello word' />
      </Tooltip>
    </div>
  )
}

export const Playground = Template.bind({})
Playground.args = {
  delay: 400,
  content: 'Este es el contenido por defecto'
}

