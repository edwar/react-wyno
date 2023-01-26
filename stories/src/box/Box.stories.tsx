import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Box from './Box'
import { Container } from '../container/Container'

export default {
  title: 'Box',
  component: Box,
  args: {},
  argTypes: {}
} as ComponentMeta<typeof Box>

const Template: ComponentStory<typeof Box> = (args) => <Container size="md">
  <Box {...args}>Hola</Box>
</Container>

export const Playground = Template.bind({})
Playground.args = {}
