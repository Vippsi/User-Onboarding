describe('Form inputs', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')
    })

    it('can type a name', () => {
        cy.get('input[name="name"]')
            .type('Lindsey')
            .should('have.value', 'Lindsey')
    })

    it('can type an email', () => {
        cy.get('input[name="email"]')
            .type('Lindsey@lindsey.com')
            .should('have.value', 'Lindsey@lindsey.com')
    })

    it('can type a password', () => {
        cy.get('input[name="password"]')
            .type('testpassword')
    })

    it('can check the TOS', () => {
        cy.get('[type="checkbox"]').check()
    })
})

describe('Is form empty', () => {
    it('Validates form errors', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('The name must be at least two characters long').should('not.exist')
        cy.get('input[name="name"]').type('a')
        cy.contains('The name must be at least two characters long')
        cy.get('input[name="name"]').type('b')
        cy.contains('The name must be at least two characters long').should('not.exist')
    })
})

describe('Submitting the form', () => {
    it('Validates form submission', () => {
        cy.visit('http://localhost:3000/')

        cy.get('input[name="name"]')
            .type('Lindsey')

        cy.get('input[name="email"]')
            .type('Lindsey@lindsey.com')

        cy.get('input[name="password"]')
            .type('testpassword')

        cy.get('select[name="role"]').select('UIUX')
            
        cy.get('[type="checkbox"]').check()

        cy.get('button.submit').click()
    })
})