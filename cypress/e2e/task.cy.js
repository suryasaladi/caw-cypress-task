describe('test', () => {
  it('opening url', () => {
    cy.visit('https://testpages.herokuapp.com/styled/tag/dynamic-table.html')
    cy.get('summary').click()
     
    cy.fixture('example.json').then((data)=>{
      const  jsonString = JSON.stringify(data)
      cy.get('textarea').clear()
      .type(jsonString, { parseSpecialCharSequences: false })
    })
    cy.get('button').click()
    cy.fixture('example.json').then((tableData)=>{
      const size = tableData.length;
      cy.get("table tr").as("tableRows");

      cy.get("@tableRows").should('have.length', size+1);
      tableData.forEach((rowData, index) => {
        cy.get("@tableRows").eq(index + 1).find("td").eq(0).should("contain.text", rowData.name);
        cy.get("@tableRows").eq(index + 1).find("td").eq(1).should("contain.text", rowData.age);
        cy.get("@tableRows").eq(index + 1).find("td").eq(2).should("contain.text", rowData.gender);
      });
      
    })
  })
})





