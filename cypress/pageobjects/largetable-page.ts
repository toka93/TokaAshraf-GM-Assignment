export class LargeTable{

    elements = {
        getTableRows: () =>   cy.get('tbody>tr'),
        getTableColumns: () =>  cy.get('tbody>tr[class="row-1"]>td'),
         getTableCells : ()=> cy.get('td'),
      
      };

     ValidateTableRowsNumber(rows:number)
     {
       this.elements.getTableRows().should('have.length', rows)
     }
     ValidateTableColumnsNumber(columns:number)
     {
       this.elements.getTableColumns().should('have.length', columns)
     }
     ValidateTableCellssNumber(cells:number)
     {
       this.elements.getTableCells().should('have.length', cells)
     }
      
}
export const LargeTablePage=new LargeTable();