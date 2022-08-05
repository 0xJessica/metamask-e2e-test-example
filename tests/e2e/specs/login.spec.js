describe('Test User Login', () => {
  it('Connects with Metamask', () => {
    cy.visit('http://localhost:3000')
    // cy.contains('Connect Wallet').click();
    // blocknative use shadow dom
    // so we cant use sizzle and selectors to get propper element
    // cy.contains('MetaMask').click();
    cy.get('html').click(620, 290);
    cy.switchToMetamaskWindow();
    cy.acceptMetamaskAccess().should("be.true");
    // cy.confirmMetamaskSignatureRequest();
    cy.switchToCypressWindow();
    cy.contains('Connect Wallet').should('not.exist');
  })
})