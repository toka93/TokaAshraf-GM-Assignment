export class DragDrop{

    elements = {
        getA: () => cy.get('#column-a'),
        getB: ()=> cy.get('#column-b'),
        getBHeader: ()=> cy.get('#column-b>header')

      
      };


     
      dragA(){
        this.elements.getA().first()
        .trigger('dragenter');
      }
      dropAtB(){
this.elements.getB().trigger('drop')
    }

     validateAisDragedToB(){
       return this.elements.getBHeader().should('have.text','a');
}

}
export const DragDropPage=new DragDrop();