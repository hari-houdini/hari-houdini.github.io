const PORTAL_BASE_URL = 'http://localhost:5173';

describe('List and Details Navigation', () => {
  const TEST_PATH = "/characters/1";

  it('Navigate from Home Page to Character Details route', () => {
    cy.visit(PORTAL_BASE_URL);
    const detailsBtn = cy.get('.card-footer').first().should('have.attr', 'href', TEST_PATH);
    detailsBtn.click();
    cy.url().should('include', TEST_PATH)
  })

  it('Navigate back to Home Page from Details route', () => {
    cy.visit(`${PORTAL_BASE_URL}${TEST_PATH}`);
    const detailsBtn = cy.get('.navigation').first();
    detailsBtn.click();
    cy.get('.card-list').should('be.visible')
  })
})

describe('Not Found Page Navigation', () => {
  const TEST_PATH = "/undefined";

  it('Navigate to a page that is not configured', () => {
    cy.visit(`${PORTAL_BASE_URL}${TEST_PATH}`);
    const detailsBtn = cy.get('#error-page').first();
    detailsBtn.should('be.visible')
  })
})

describe('Not Found Character Navigation', () => {
  const TEST_PATH = "/characters/abc";

  it('Navigate to an undefined character route', () => {
    cy.visit(`${PORTAL_BASE_URL}${TEST_PATH}`);
    const detailsBtn = cy.get('#no-data').first();
    detailsBtn.should('be.visible')
  })
})