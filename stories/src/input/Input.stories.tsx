import React from 'react'
import { Icon } from '../icon/Icon'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input } from './Input'
import { Container } from '../container/Container'

export default {
  title: 'Input',
  component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Container size="md">
  <Input {...args} />
</Container>

export const Playground = Template.bind({})
Playground.args = {
  label: 'Name',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
  isError: false,
  errorMessage: 'Error defined for user',
  size: 'default',
  icon: <Icon name='start' color='#333' size={15} strokeWidth={5} />
}

