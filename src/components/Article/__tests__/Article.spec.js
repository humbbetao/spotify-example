import React from 'react'
import { mount, shallow } from 'enzyme'
import Article from '../Article'

describe('Article', () => {
  it('should render correctly when children is not passed', () => {
    const wrapper = mount(<Article />)
    expect(wrapper.children.length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render correctly when children is passed', () => {
    const wrapper = mount(
      <Article>
        <p>Teste</p>
      </Article>
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.children.length).toEqual(1)
  })
})
