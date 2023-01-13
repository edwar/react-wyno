import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Blob } from './Blob'

export default {
  title: 'Blob',
  component: Blob,
  args: {
    buttonType: 'primary'
  },
  argTypes: {
    buttonType: {
      control: 'select',
      options: ['primary', 'outline', 'text', 'danger']
    }
  }
} as ComponentMeta<typeof Blob>

const Template: ComponentStory<typeof Blob> = (args) => <Blob {...args} />

export const Playground = Template.bind({})
Playground.args = {
  duration: '50s',
  timingFunction: 'linear',
  size: '60vw',
  delay: '',
  style: {
    width: '500px',
    height: '500px',
    left: '-100px',
    top: '-200px',
    position: 'absolute',

    zIndex: -1,
    background: '#8142F5',
    color: 'white'
  }
}
