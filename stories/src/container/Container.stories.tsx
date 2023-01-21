import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Container } from './Container'

export default {
  title: 'Container',
  components: Container,
  args: {},
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
    },
  }
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = (args) => <>
  <Container {...args} />
</>

export const Playground = Template.bind({})
Playground.args = {
  size: 'xs',
  children: <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aperiam. Amet mollitia dicta quaerat odit sequi, ad quos quam, enim alias repellat tempora? At, temporibus labore. Nesciunt mollitia aliquam iste!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aperiam. Amet mollitia dicta quaerat odit sequi, ad quos quam, enim alias repellat tempora? At, temporibus labore. Nesciunt mollitia aliquam iste!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aperiam. Amet mollitia dicta quaerat odit sequi, ad quos quam, enim alias repellat tempora? At, temporibus labore. Nesciunt mollitia aliquam iste!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aperiam. Amet mollitia dicta quaerat odit sequi, ad quos quam, enim alias repellat tempora? At, temporibus labore. Nesciunt mollitia aliquam iste!
    <br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aperiam. Amet mollitia dicta quaerat odit sequi, ad quos quam, enim alias repellat tempora? At, temporibus labore. Nesciunt mollitia aliquam iste!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aperiam. Amet mollitia dicta quaerat odit sequi, ad quos quam, enim alias repellat tempora? At, temporibus labore. Nesciunt mollitia aliquam iste!
    <br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aperiam. Amet mollitia dicta quaerat odit sequi, ad quos quam, enim alias repellat tempora? At, temporibus labore. Nesciunt mollitia aliquam iste!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aperiam. Amet mollitia dicta quaerat odit sequi, ad quos quam, enim alias repellat tempora? At, temporibus labore. Nesciunt mollitia aliquam iste!
  </div>
}
