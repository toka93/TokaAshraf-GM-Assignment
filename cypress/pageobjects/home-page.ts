export class Home {

 

    elements = {
        getLargeTableBtn: () => cy.get('a[href="/large"]'),
        getLoginFormBtn: () => cy.get('a[href="/login"]'),
        getDragAndDropBtn: () => cy.get('a[href="/drag_and_drop"]'),
        getDynamicLoadedPageBtn: () => cy.get('a[href="/dynamic_loading"]'),
        getBrokenImagesBtn:() => cy.get('a[href="/broken_images"]'),
        getAddRemoveElementsBtn :() => cy.get('a[href="/add_remove_elements/"]')
        
      };


      openLargeTable() {
        this.elements.getLargeTableBtn().click();
      }
      openLoginForm() {
        this.elements.getLoginFormBtn().click();
      }
      openDragandDrop() {
        this.elements.getDragAndDropBtn().click();
      }
      openDynamicLoadedPage() {
        this.elements.getDynamicLoadedPageBtn().click();
      }

      openBrokenImages() {
        this.elements.getBrokenImagesBtn().click();
      }
      openAddRemoveElements() {
        this.elements.getAddRemoveElementsBtn().click();
      }
     

}
export const HomePage=new Home();