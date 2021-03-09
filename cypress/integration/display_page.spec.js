/// <reference types="cypress" />

context('display page', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })

  it('.type() - type into a DOM element', () => {
    cy.get('.action-email')
      .type('fake@email.com').should('have.value', 'fake@email.com')
  })

})
