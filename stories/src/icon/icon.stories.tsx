import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Icon } from './Icon'
import { Container } from '../container/Container'
import { Card } from '../card/Card'

export default {
  title: 'Icons',
  components: Icon,
  args: {},
  argTypes: {
    name: {
      control: 'select',
      options: [
        'arrow-down', 
        'arrow-left', 
        'arrow-maximizer', 
        'arrow-maximizer-down-left-up-right', 
        'arrow-maximizer-up-left-down-right', 
        'arrow-right', 
        'arrow-up',
        'check',
        'chevron-down',
        'chevron-up',
        'close',
        'hamburger',
        'minus',
        'plus',
        'start',
        'trash'
      ],
    }
  }
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Container size="md">
  <Card description={args.name}>
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <Icon {...args} />
    </div>
  </Card>
</Container>

export const Playground = Template.bind({})
Playground.args = {
  name: 'arrow-down',
  size: 50,
  strokeWidth: 3,
  color: '#333'
}
