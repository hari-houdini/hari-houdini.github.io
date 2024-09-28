describe('Portal List and Details', () => {
  const TEST_PATH = "/characters/1";

  it('Navigate from Home Page to Character Details route', () => {
    cy.visit('http://localhost:5173');
    const detailsBtn = cy.get('.card-footer').first().should('have.attr', 'href', TEST_PATH);
    detailsBtn.click();
    cy.url().should('include', TEST_PATH)
  })

  it('Navigate back to Home Page from Details route', () => {
    cy.visit(`http://localhost:5173${TEST_PATH}`);
    const detailsBtn = cy.get('.navigation').first();
    detailsBtn.click();
    cy.get('.card-list').should('be.visible')
  })
})
