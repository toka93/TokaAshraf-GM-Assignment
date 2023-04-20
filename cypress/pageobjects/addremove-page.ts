
export class AddRemove{

  elements = {
      getAddBtn: () => cy.get('[onclick="addElement()"]'),
      getAddedBtn: () => cy.get('.added-manually')
    
    };

    clickOnAdd() {
      this.elements.getAddBtn().click();
    }

    checkButtonIsAdded(){
     return  this.elements.getAddedBtn().should('exist')
    }

    removeButton()
  {
      this.elements.getAddedBtn().click()
  }
  checkButtonRemoved(){
      return this.elements.getAddedBtn().should('not.exist')
  }
}

export const AddRemovePage=new AddRemove();

