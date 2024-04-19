describe('template spec', () => {
    it('auth true', () => {
      cy.fixture('test').then(data =>{
        cy.log('login url');
        cy.visit(data.login_url);
  
        cy.log('login');
        cy.get('.form-input--text').type(data.login);
  
        cy.log('password');
        cy.get('.form-input--password').type(data.password);
  
        cy.log('click on btn');
        cy.get(':nth-child(3) > .button').click();
      });
    });
});