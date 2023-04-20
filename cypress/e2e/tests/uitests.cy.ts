import { HomePage } from "../../pageobjects/home-page";
import { Header } from "../../pageobjects/component/header";
import { AddRemovePage } from "../../pageobjects/addremove-page";
import { BrokenImagePage } from "../../pageobjects/brokenimage-page";
import {DynamicLoadPage} from "../../pageobjects/dynamicLoad-page";
import { LoginFormPage } from "../../pageobjects/loginform-page";
import { DragDropPage } from "../../pageobjects/dragdrop-page";  
import { LargeTablePage } from "../../pageobjects/largetable-page";

describe('Automation Task', () => {
  let data;
  before(function () {
    cy.fixture('data').then(function (testdata) {
        data = testdata
    })

   
})
   
   
      it('Verify Adding And Removing Elements', function() {
        HomePage.openAddRemoveElements();
        Header.checkHeaderValue(data.addRemoveTitle);
        AddRemovePage.clickOnAdd();
        AddRemovePage.checkButtonIsAdded();
        AddRemovePage.removeButton();
        AddRemovePage.checkButtonRemoved();
       
       })

      it('Verify Broken Image', function()  {
       HomePage.openBrokenImages();
       Header.checkHeaderValue(data.brokenImagesTitle);
       BrokenImagePage.checkImageIsBroken()
       
       })
     
      it('Verify Progress Bar and Element', function()  {
       HomePage.openDynamicLoadedPage();
       Header.checkHeaderValue(data.dynamicLoadingTitle)
       DynamicLoadPage.clickOnFirstElement();
       DynamicLoadPage.clickOnStart();
       DynamicLoadPage.checkProgressBar();
       DynamicLoadPage.ValidateFinishLabel();
 
 
       })
       


       it('Verify Login Form', function()  {
        HomePage.openLoginForm();
        LoginFormPage.ValidateHeaderText(data.loginForm);      

       })

       it('Verify User Can Drag and Drop', function() {
        HomePage.openDragandDrop();
        Header.checkHeaderValue(data.dragDropTitle);
        DragDropPage.dragA();
        DragDropPage.dropAtB();
        DragDropPage.validateAisDragedToB();
    
      })
      it('Verify Table Size', function() {
        HomePage.openLargeTable();
        Header.checkHeaderValue(data.tableTitle);
        LargeTablePage.ValidateTableRowsNumber(data.Rows);
        LargeTablePage.ValidateTableColumnsNumber(data.Columns)
        //LargeTablePage.ValidateTableCellssNumber(data.Rows*data.Columns)

     
 })
   
   });