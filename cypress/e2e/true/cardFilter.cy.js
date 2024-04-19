describe('template spec', () => {
    it('filter card', () => {
        cy.fixture('test').then(data => {
            cy.log('vacancies url')
            cy.visit(data.vacancies_url)

            cy.log('find card')
            cy.get('.form-input--text').type('пипи пупу')

            cy.log('filter 1')
            cy.get(':nth-child(2) > .radio-component__input').click()

            cy.log('filter 2')
            cy.get(':nth-child(3) > :nth-child(2) > .form-select__selected').click()
            cy.get('.form-select__items > :nth-child(3)').click()

            cy.log('click on btn')
            cy.get('div.search-input__field > .button').click()
        });
    });
});