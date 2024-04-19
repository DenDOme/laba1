describe('template spec', () => {
    it('filter && find need ', () => {
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
          cy.get(':nth-child(6) > .menu-item__item-name').click()

          cy.log('filter');
          cy.get('.needs-block__filters-wrapper > .form-select > :nth-child(2) > .form-select__selected').click()
          cy.wait(4000)

          cy.log('click on btn');
          cy.get('.form-select__items > :nth-child(3)').click()
      });
    });
});