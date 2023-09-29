
describe('test', () => {
  it('opening url', () => {
    cy.visit('https://testpages.herokuapp.com/styled/tag/dynamic-table.html')
    cy.get('summary').click()
     cy.fixture('example.json').as('jsonData')
    cy.fixture('example.json').then((data)=>{
      const  jsonString = JSON.stringify(data)
      cy.get('textarea').clear()
      .type(jsonString, { parseSpecialCharSequences: false })
    })
    cy.get('button').click()
    cy.get('table').should('contain','Jennifer')
  })
})





