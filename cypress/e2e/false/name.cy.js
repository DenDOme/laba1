describe('template spec', () => {
    it('name false', () => {
        cy.fixture('test').then(data => {
          cy.log('login url');
          cy.visit(data.login_url);
  
          cy.log('login');
          cy.get('.form-input--text').type(data.login);
  
          cy.log('password');
          cy.get('.form-input--password').type(data.password);
  
          cy.log('click on btn');
          cy.get(':nth-child(3) > .button').click(2000);
          
          cy.log('click on link');
          cy.get(':nth-child(2) > .menu-item__item-name').click()

          cy.log('name');
          cy.get(':nth-child(2) > .form-control--max > .form-input--text').clear().type('123')

          cy.log('click on btn');
          cy.get('.profile-forms > .form > .form__buttons > .button').click()
        });
    });
});