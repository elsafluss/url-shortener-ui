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
  
  it("should show what the user has input into the form", () => {
    cy.get(".title-input").should("have.value", "")
    cy.get(".url-input").should("have.value", "")

    cy.get(".title-input").type("don't panic")
    cy.get(".url-input").type(
      "https://www.bbc.co.uk/programmes/articles/1g84m0sXpnNCv84GpN2PLZG/the-game-30th-anniversary-edition"
    )

    cy.get(".title-input").should("have.value", "don't panic")
    cy.get(".url-input").should(
      "have.value",
      "https://www.bbc.co.uk/programmes/articles/1g84m0sXpnNCv84GpN2PLZG/the-game-30th-anniversary-edition"
    )
  })
})

describe("make new URL", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
    cy.intercept("POST", "http://localhost:3001", {
      body: {
        id: 42,
        long_url:
          "https://www.bbc.co.uk/programmes/articles/1g84m0sXpnNCv84GpN2PLZG/the-game-30th-anniversary-edition",
        short_url: "http://localhost:3001/useshorturl/2",
        title: "don't panic",
      },
    })
  })

  it("should show a new shortened URL on submit", () => {
    cy.get(".title-input").type("don't panic")
    cy.get(".url-input").type(
      "https://www.bbc.co.uk/programmes/articles/1g84m0sXpnNCv84GpN2PLZG/the-game-30th-anniversary-edition"
    )
    cy.get(".button").click()

    cy.get(".url")
      .children()
      .contains("don't panic")
      .siblings()
      .contains("http://localhost:3001/useshorturl")
  })
})

