describe('template spec', () => {
    it('student need', () => {
        cy.fixture('test').then(data => {
            cy.log('needs url')
            cy.visit('https://dev.profteam.su/needs')

            cy.log('find needs')
            cy.get('.form-input--text').type('q')

            cy.log('filter 1')
            cy.get(':nth-child(2) > .radio-component__input').click()

            cy.log('filter 2')
            cy.get('.form-select__selected').click()
            cy.get('.form-select__items > :nth-child(4)').click()

            cy.log('click on btn')
            cy.get('div.search-input__field > .button').click()
        });
    });
});