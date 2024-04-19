describe('template spec', () => {
    it('profile false', () => {
      cy.fixture('test').then(data => {
          cy.log('login url');
          cy.visit(data.login_url);
  
          cy.log('login');
          cy.get('.form-input--text').type(data.testerEmployer);
  
          cy.log('password');
          cy.get('.form-input--password').type(data.password);
  
          cy.log('click on btn');
          cy.get(':nth-child(3) > .button').click(2000);
          
          cy.log('click on link');
          cy.get(':nth-child(2) > .menu-item__item-name').click()
          cy.wait(2000)
          
          cy.log('click on btn');
          cy.get('.base-card > .button').click()
      });
    });
});