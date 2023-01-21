import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card } from './Card'
import { Icon } from '../icon/Icon'
import { Container } from '../container/Container'

export default {
  title: 'Card',
  components: Card,
  args: {},
  argTypes: {}
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Container size="md">
  <Card {...args} />
</Container>

export const Playground = Template.bind({})
Playground.args = {
  children: <Icon name='trash' color='#333' size={50} />,
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facilis eos dolorem numquam ea quam sunt excepturi, eligendi placeat qui pariatur reiciendis accusantium ratione et eaque a at quae! Nisi.'
}
