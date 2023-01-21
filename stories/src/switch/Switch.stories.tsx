import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { Switch } from './Switch'
import { Container } from '../container/Container'

export default {
  title: 'Switch',
  component: Switch,
  args: {
    size: 'default',
    color: '#540bdb'
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'large', 'small'],
    }
  }
} as unknown as ComponentMeta<typeof Switch>


const Template: ComponentStory<typeof Switch> = (args) => {
  const [, updateArgs] = useArgs()
  const change = (checked: boolean) => updateArgs({ checked })
  return <Container size='md'>
    <div style={{ display: 'flex', width: '100%', height: '255px', justifyContent: 'center', alignItems: 'center'}}>
      <Switch {...args} onChange={change} />
    </div>
  </Container>
}

export const Playground = Template.bind({})
Playground.args = {
  size: 'default'
}

