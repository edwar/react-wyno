import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Grid from './Grid'
import Box from '../box/Box'
import GridRuler from './GridRuler'
import { Container } from '../container/Container'

export default {
  title: 'Grid',
  component: Grid,
  args: {
    spacing: 'xs',
    justifyContent: 'space-between'
  },
  argTypes: {
    spacing: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    justifyContent: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'],
    }
  }
} as ComponentMeta<typeof Grid>

const Template: ComponentStory<typeof Grid> = (args) => <Container size="xl">
  <div style={{ position: 'relative' }}>
    <GridRuler spacing='sm' {...args} />
    <Grid
      container
      spacing='sm'
      alignItems='center'
      {...args}
    >
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
      >
        <Box>Box 1</Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
      >
        <Box>Box 2</Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
      >
        <Box>Box 3</Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
      >
        <Box>Box 4</Box>
      </Grid>
    </Grid>
  </div>
</Container>

export const Playground = Template.bind({})
Playground.args = {}
