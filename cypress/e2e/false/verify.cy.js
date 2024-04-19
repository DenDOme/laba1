describe('template spec', () => {
    it('verify false',() =>{
        cy.fixture('test').then(data =>{
            cy.log('login url')
            cy.visit(data.login_url)
  
            cy.log('login');
            cy.get('.form-input--text').type(data.login);
  
            cy.log('password');
            cy.get('.form-input--password').type(data.password);
  
            cy.log('click on btn')
            cy.get(':nth-child(3) > .button').click()
            
            cy.log('verify')
            cy.get('.message-student > .button').click()
            
            cy.log('choose 1');
            cy.get('.desktop-modal__content > .student-form > .choose-institution > :nth-child(1) > [data-v-40f88df4=""] > .search-input > div.search-input__field > .form-input--text').type('ттит').wait(2000)
            
            cy.get('.search-input__item').click()
            
            cy.log('choose 2');
            cy.get('.desktop-modal__content > .student-form > .choose-specialty > [data-v-0dbb9e5f=""] > .search-input > div.search-input__field > .form-input--text').type('11.02.08 Средства связи с подвижными объектами').wait(2000);
            
            cy.get('.search-input__item').first().click();
            
            
            cy.log('choose 3')
            cy.get('.desktop-modal__content > .student-form > :nth-child(3) > .form-control--max > .form-input--text').type('про')
            
            cy.log('choose 4')
            cy.get('.desktop-modal__content > .student-form > .student-form__courses > .courses-list > :nth-child(5)').click()
            
            cy.log('choose 5');
            cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(1) > .form-control--max > .form-input--number').click();
            cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(1) > .form-control--max > .form-input--number').type('2022');
            
            cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(2) > .form-control--max > .form-input--number').click();
            cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(2) > .form-control--max > .form-input--number').type('2030');
            
            cy.log('click on btn')
            cy.get('.desktop-modal__content > .student-form > .button').click()
        })
    })
});  