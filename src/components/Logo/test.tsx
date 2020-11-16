import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a black label by default', () => {
    // renderizar o componente com render
    // selecionar o elemento a ser testado com screen (queries)
    // expect -assertion - asserção - comparação - análise (espera que se renderize a logo black)
    renderWithTheme(<Logo />)
    expect(
      screen.getByLabelText(/DI Center - Sinform/i).parentElement
    ).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a white label by default', () => {
    renderWithTheme(<Logo color="white" />)
    expect(
      screen.getByLabelText(/DI Center - Sinform/i).parentElement
    ).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a bigger logo whithout size is default', () => {
    renderWithTheme(<Logo />)
    expect(
      screen.getByLabelText(/DI Center - Sinform/i).parentElement
    ).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(
      screen.getByLabelText(/DI Center - Sinform/i).parentElement
    ).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(
      screen.getByLabelText(/DI Center - Sinform/i).parentElement
    ).toHaveStyleRule('width', '5.8rem', { media: '(max-width: 768px)' })
  })
})
