import React from 'react'
import { mount } from 'enzyme'
import Header from '../Header'

describe('Header', () => {
  it('should render correctly when children is not passed', () => {
    const wrapper = mount(<Header />)
    expect(wrapper.children.length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render correctly when children is passed', () => {
    const wrapper = mount(
      <Header>
        <p>Teste</p>
      </Header>
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.children.length).toEqual(1)
  })
})
