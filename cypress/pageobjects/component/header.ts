export class Headers{


   
    checkHeaderValue(title:string)
    {
      return  cy.get('h3').should('have.text',title)
    }
      

}

export const Header= new Headers(); 