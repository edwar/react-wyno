import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Blob } from './Blob'
import { Container } from '../container/Container'

export default {
  title: 'Blob',
  component: Blob,
  args: {},
  argTypes: {
    timingFunction: {
      control: 'select',
      options: ['ease', 'linear', 'ease-in-out']
    }
  }
} as ComponentMeta<typeof Blob>

const Template: ComponentStory<typeof Blob> = (args) => <Container size="md">
  <Blob {...args} />
</Container>

export const Playground = Template.bind({})
Playground.args = {
  duration: '50s',
  timingFunction: 'linear',
  size: '500px',
  delay: '1ms',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: '#8142F5'
}
