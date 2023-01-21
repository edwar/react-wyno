import React from 'react'
import { Icon } from '../icon/Icon'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'
import { Container } from '../container/Container'

export default {
  title: 'Button',
  component: Button,
  args: {
    buttonType: 'primary',
    size: 'default',
    iconPosition: 'none',
    shape: 'rectangular'
  },
  argTypes: {
    buttonType: {
      control: 'select',
      options: ['primary', 'outline', 'text', 'danger'],
    },
    size: {
      control: 'select',
      options: ['default', 'large', 'small'],
    },
    iconPosition: {
      control: 'select',
      options: ['none', 'leading', 'tailing']
    },
    shape: {
      control: 'select',
      options: ['rectangular', 'semi-rounded', 'rounded']
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Container size="md">
  <Button {...args} />
</Container>

export const Playground = Template.bind({})
Playground.args = {
  label: 'Button',
  icon: <Icon color='white' name='check' size={15} strokeWidth={15} />
}
