describe('template spec', () => {
    it('answer to responce', () => {
        cy.fixture('test').then(data => {
            cy.log('login url')
            cy.visit(data.login_url)

            cy.log('login')
            cy.get('.form-input--text').type(data.testerEmployer)

            cy.log('password')
            cy.get('.form-input--password').type(data.password)

            cy.log('click on btn')
            cy.get(':nth-child(3) > .button').click(2000)
            
            cy.log('click on link')
            cy.get(':nth-child(5) > .menu-item__item-name').click()

            cy.log('click on answer')
            cy.get(':nth-child(2) > .responses-list-item__actions > :nth-child(1)').click()
        });
    });
});