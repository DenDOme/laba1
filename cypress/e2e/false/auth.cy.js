describe('template spec', () => {
    it('auth false', () => {
        cy.fixture('test').then(data => {
        cy.log('auth url');
        cy.visit(data.login_url);

        cy.log('false login');
        cy.get('.form-input--text').type('aaa');

        cy.log('false password');
        cy.get('.form-input--password').type('aaa');

        cy.log('click on btn');
        cy.get(':nth-child(3) > .button').click();

        });
    });
});