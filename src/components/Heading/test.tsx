import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a black label by default', () => {
    renderWithTheme(<Heading>DI Center - Sinform</Heading>)
    expect(
      screen.getByRole('heading', { name: /DI Center - Sinform/i })
    ).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a white heading when color is passed', () => {
    renderWithTheme(<Heading color="white">DI Center - Sinform</Heading>)
    expect(
      screen.getByRole('heading', { name: /DI Center - Sinform/i })
    ).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a heading with line to the left side', () => {
    renderWithTheme(<Heading lineLeft>DI Center - Sinform</Heading>)
    expect(
      screen.getByRole('heading', { name: /DI Center - Sinform/i })
    ).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })

  it('should render a heading with line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>DI Center - Sinform</Heading>)
    expect(
      screen.getByRole('heading', { name: /DI Center - Sinform/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })
})
