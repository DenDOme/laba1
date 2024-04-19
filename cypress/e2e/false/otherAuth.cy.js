describe('template spec', () => {
    it('auth with other false', () => {
        cy.fixture('test').then(data => {
            cy.log('auth login');
            cy.visit(data.login_url);

            cy.log('button check');
            cy.get('.button-login__network-city-desktop')
                .click(2000);

            cy.log('false login');
            cy.get('.desktop-modal__content > .form > :nth-child(1) > .form__labels > :nth-child(1) > .form-control--medium > .form-input--text')
                .type('неверныйлогин');

            cy.log('false password');
            cy.get('.desktop-modal__content > .form > :nth-child(1) > .form__labels > :nth-child(2) > .form-control--medium > .form-input--password')
                .type('неверныйпароль');


            cy.log('check other');
            cy.get('.desktop-modal__content > .form > .form__buttons > .login-form__button')
                .click();
        });
    });
});