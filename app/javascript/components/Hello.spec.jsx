import React from 'react'
import Hello from './Hello'
import { mount } from '@cypress/react'

describe('Hello', () => {
  it('displays hello message', () => {
    mount(<Hello />)
    cy.contains(/hello world/i)
  })
})
