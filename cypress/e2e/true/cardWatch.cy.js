describe('template spec', () => {
    it('card vacancies', () => {
      cy.fixture('test').then(data => {
          cy.log('vacancies url')
          cy.visit(data.vacancies_url)

          cy.log('click on btn')
          cy.get(':nth-child(1) > .vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button').click()
      });
  });
});