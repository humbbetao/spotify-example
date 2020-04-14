import React from 'react'
import { mount } from 'enzyme'
import P from '../P'

describe('Label', () => {
  it('should render correctly when children is not passed', () => {
    const wrapper = mount(<P />)
    expect(wrapper.children.length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render correctly when children is passed', () => {
    const wrapper = mount(<P>Teste</P>)

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.children.length).toEqual(1)
  })
})
