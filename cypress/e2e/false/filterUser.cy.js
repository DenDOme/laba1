describe('template spec', () => {
    it('filter && find user false', () => {
        cy.fixture('test').then(data => {
            cy.log('login url');
            cy.visit(data.login_url);
  
            cy.log('login');
            cy.get('.form-input--text').type(data.testerEmployer);
  
            cy.log('password');
            cy.get('.form-input--password').type(data.password);
  
            cy.log('click on btn');
            cy.get(':nth-child(3) > .button').click(2000);
            cy.wait(4000)

            cy.log('click on link');
            cy.get(':nth-child(1) > .header__nav > [href="/internships"]').click()

            cy.log('click on radio');
            cy.get(':nth-child(2) > .radio-component__input').click()
  
            cy.log('click on select');
            cy.get(':nth-child(3) > :nth-child(2) > .form-select__selected').click()
            cy.get('.form-select__items > :nth-child(2)').click()

            cy.get('div.search-input__field > .button').click()
        });
    });
});