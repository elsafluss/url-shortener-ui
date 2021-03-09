/// <reference types="cypress" />

describe('display page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
    cy.intercept("GET", "http://localhost:3001",
    { fixture: "../fixtures/post.json" },
    {
      statusCode: 200
    }
    )
  })
  
  it('should show the page title and shortened URLs', () => {
    cy.get(".header").contains('URL Shortener')
    cy.get("div[class=url]").should("exist")
    cy.get("p[class=no-urls]").should("not.exist")
  })
  
  it("should show the form", () => {
    cy.get(".title-input").should("exist").should("have.attr", "type", "text")
    cy.get(".url-input").should("exist").should("have.attr", "type", "text")
    cy.get(".button").should("exist")
  })
  
})

