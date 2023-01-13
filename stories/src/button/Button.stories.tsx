import React from 'react'
import { FaBeer } from 'react-icons/fa'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    buttonType: {
      control: 'select',
      options: ['primary', 'outline', 'text', 'danger'],
      defaultValue: 'primary'
    },
    size: {
      control: 'select',
      options: ['default', 'large', 'small'],
      defaultValue: 'default'
    },
    iconPosition: {
      control: 'select',
      options: ['none', 'leading', 'tailing'],
      defaultValue: 'none'
    },
    shape: {
      control: 'select',
      options: ['rectangular', 'semi-rounded', 'rounded'],
      defaultValue: 'rectangular'
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Playground = Template.bind({})
Playground.args = {
  label: 'Button',
  icon: <FaBeer />
}
