import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tooltip } from './Tooltip'
import { Button } from '../button/Button'
import { Container } from '../container/Container'

export default {
  title: 'Tooltip',
  component: Tooltip,
  args: {},
  argTypes: {}
} as unknown as ComponentMeta<typeof Tooltip>


const Template: ComponentStory<typeof Tooltip> = (args) => {
  return <Container size='md'>
    <div style={{ display: 'flex', width: '100%', height: '255px', justifyContent: 'center', alignItems: 'center'}}>
      <Tooltip {...args}>
        <Button label='Hello word' />
      </Tooltip>
    </div>
  </Container>
}

export const Playground = Template.bind({})
Playground.args = {
  delay: 400,
  content: 'Este es el contenido por defecto',
  direction: 'bottom'
}

