/* eslint-disable react/prop-types */
import React from 'react'
import TestRenderer from 'react-test-renderer'
import expect from 'expect.js'

import useStyles from './useStyles'
import {ThemeProvider} from '.'

const createStyledComponent = (styles, props) => {
  const Comp = () => {
    useStyles(styles, props)
    return null
  }
  return Comp
}

describe('React-JSS: useStyles', () => {
  let themeFromUseTheme

  const themeA = {
    bgColor: '#ccc'
  }
  const themeB = {
    bgColor: '#fff'
  }

  const defaultProps = {
    getTheme: theme => {
      themeFromUseTheme = theme
    }
  }

  beforeEach(() => {
    themeFromUseTheme = {}
  })

  it('should use inherited theming object', () => {
    const StyledComponent = createStyledComponent({})
    StyledComponent.defaultProps = defaultProps

    TestRenderer.create(
      <ThemeProvider theme={themeA}>
        <StyledComponent />
      </ThemeProvider>
    )
    expect(themeFromUseTheme).to.be(themeA)
  })

  it('should use custom theming object defined', () => {
    const StyledComponent = createStyledComponent({}, {theme: themeB})
    StyledComponent.defaultProps = defaultProps

    TestRenderer.create(
      <ThemeProvider theme={themeA}>
        <StyledComponent />
      </ThemeProvider>
    )
    expect(themeFromUseTheme).to.be(themeB)
  })
})
