export class BrokenImage{

    elements = {
        getFirstBrokenImage: () => cy.get('[src="asdf.jpg"]'),
      
      };


      checkImageIsBroken() {
        return this.elements.getFirstBrokenImage().scrollIntoView()
        .should('be.visible')
        .and(($img) => {
            expect($img[0].naturalWidth).to.be.equal(0)
          })
      }



}
export const BrokenImagePage=new BrokenImage();