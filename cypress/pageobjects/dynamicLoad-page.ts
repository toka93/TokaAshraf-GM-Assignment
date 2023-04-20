export class DynamicLoad{

    elements = {
        getFirstElementButton: ()=> cy.get('a[href="/dynamic_loading/1"]'),
        getStartButton: () => cy.get('div#start>button'),
        getProgressBar: ()=> cy.get('div#loading>img', {timeout: 20_000}),
        getFinishLabel: ()=> cy.get('div#finish>h4')

      
      };


     clickOnFirstElement()
     {
      this.elements.getFirstElementButton().click();
     }
      clickOnStart(){
        this.elements.getStartButton().click();
      }
      checkProgressBar(){
        return this.elements.getProgressBar().should('not.be.visible');
       }

     ValidateFinishLabel(){
       return this.elements.getFinishLabel().should('exist').should('have.text','Hello World!')
       }

}
export const DynamicLoadPage=new DynamicLoad();