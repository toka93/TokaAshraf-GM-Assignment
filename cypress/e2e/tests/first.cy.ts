import { HomePage } from "../../pageobjects/home-page";
import { Header } from "../../pageobjects/component/header";
import { LoginFormPage } from "../../pageobjects/loginform-page";
const testData = require('../../fixtures/user.json')

describe('Data Driven Login Test', ()=> {



  testData.forEach((credentials) => {
   it('Verify Login Form', function()  {
    HomePage.openLoginForm();
    LoginFormPage.enterUserName(credentials.user);
    LoginFormPage.enterPassword(credentials.password);
    LoginFormPage.clickOnLogin();
    LoginFormPage.validateSuccessMsg(credentials.message);
 
  

   })
     

  })

   });