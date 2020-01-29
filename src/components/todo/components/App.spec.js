import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import App from './App'
import HeaderContainer from './header/HeaderContainer'
import MainSectionContainer from './mainSection/MainSectionContainer'

const setup = _propOverrides => {
  const renderer = createRenderer()
  renderer.render(<App />)
  const output = renderer.getRenderOutput()
  return output
}

describe('components', () => {
  describe('HeaderContainer', () => {
    it('should render', () => {
      const output = setup()
      const [header] = output.props.children
      expect(header.type).toBe(HeaderContainer)
    })
  })

  describe('MainsectionContainer', () => {
    it('should render', () => {
      const output = setup()
      const [, mainSection] = output.props.children
      expect(mainSection.type).toBe(MainSectionContainer)
    })
  })
})
