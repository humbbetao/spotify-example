import React from 'react'
import { mount } from 'enzyme'
import Label from '../Label'

describe('Label', () => {
  it('should render correctly when children is not passed', () => {
    const wrapper = mount(<Label />)
    expect(wrapper.children.length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render correctly when children is passed', () => {
    const wrapper = mount(
      <Label>
        <p>Teste</p>
      </Label>
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.children.length).toEqual(1)
  })
})
