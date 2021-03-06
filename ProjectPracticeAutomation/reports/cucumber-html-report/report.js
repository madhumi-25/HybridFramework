$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Feature/TestCase.feature");
formatter.feature({
  "line": 2,
  "name": "Testing the practice automation website",
  "description": "",
  "id": "testing-the-practice-automation-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Practice_Automation_Project"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "To check if the user is able to login with valid details",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-login-with-valid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@TC-01-Login_functionlity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Open the Practice automation website",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Enter valid and invalid \"\u003cemail\u003e\" and \"\u003cpassword\u003e\" in Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Take screenshot",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-login-with-valid-details;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 15,
      "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-login-with-valid-details;;1"
    },
    {
      "cells": [
        "madhusavi1@gmail.com",
        "madhuvickyrekha"
      ],
      "line": 16,
      "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-login-with-valid-details;;2"
    },
    {
      "cells": [
        "mavire@gmail.com",
        "mavire3456"
      ],
      "line": 17,
      "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-login-with-valid-details;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "To check if the user is able to login with valid details",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-login-with-valid-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Practice_Automation_Project"
    },
    {
      "line": 5,
      "name": "@TC-01-Login_functionlity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Open the Practice automation website",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Enter valid and invalid \"madhusavi1@gmail.com\" and \"madhuvickyrekha\" in Login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Take screenshot",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.the_user_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 21593920999,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 12734966799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "madhusavi1@gmail.com",
      "offset": 25
    },
    {
      "val": "madhuvickyrekha",
      "offset": 52
    }
  ],
  "location": "LoginSteps.enter_valid_and_invalid_and_in_Login(String,String)"
});
formatter.result({
  "duration": 18727547100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_login_button()"
});
formatter.result({
  "duration": 9072383500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.Take_screenshot()"
});
formatter.result({
  "duration": 12485508000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "To check if the user is able to login with valid details",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-login-with-valid-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Practice_Automation_Project"
    },
    {
      "line": 5,
      "name": "@TC-01-Login_functionlity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Open the Practice automation website",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Enter valid and invalid \"mavire@gmail.com\" and \"mavire3456\" in Login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Take screenshot",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.the_user_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 4568272500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 13869342200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mavire@gmail.com",
      "offset": 25
    },
    {
      "val": "mavire3456",
      "offset": 48
    }
  ],
  "location": "LoginSteps.enter_valid_and_invalid_and_in_Login(String,String)"
});
formatter.result({
  "duration": 17665714201,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_login_button()"
});
formatter.result({
  "duration": 7462405500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.Take_screenshot()"
});
formatter.result({
  "duration": 12410565900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "To check if the user is able to add the books in the basket on the filtered price",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-add-the-books-in-the-basket-on-the-filtered-price",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@TC-02-Filtering_and_adding_books_to_Basket"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Launch the Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "open Practice automation website",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Enter the Email and password in login",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Click on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click Shop icon and Filter price using Slider",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Add the books to the basket and View the cart",
  "keyword": "And "
});
formatter.match({
  "location": "FilterAddBooksToBasketSteps.launch_the_Chrome_browser()"
});
formatter.result({
  "duration": 4955940700,
  "status": "passed"
});
formatter.match({
  "location": "FilterAddBooksToBasketSteps.open_Practice_automation_website()"
});
formatter.result({
  "duration": 11332847999,
  "status": "passed"
});
formatter.match({
  "location": "FilterAddBooksToBasketSteps.enter_the_Email_and_password_in_login()"
});
formatter.result({
  "duration": 15317772900,
  "status": "passed"
});
formatter.match({
  "location": "FilterAddBooksToBasketSteps.click_on_Login_Button()"
});
formatter.result({
  "duration": 8749575300,
  "status": "passed"
});
formatter.match({
  "location": "FilterAddBooksToBasketSteps.click_Shop_icon_and_Filter_price_using_Slider()"
});
formatter.result({
  "duration": 53893204400,
  "status": "passed"
});
formatter.match({
  "location": "FilterAddBooksToBasketSteps.add_the_books_to_the_basket_and_View_the_cart()"
});
formatter.result({
  "duration": 9816790100,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "To check if the user is able to buy books from HTML category",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-buy-books-from-html-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@TC_03_Adding_books_from_HTML_Category"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "To Launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "To open the Practice automation website",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Enter Email and password in login field",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Click on the Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Click Shop icon, Click HTML and buy the book",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "View the cart html book",
  "keyword": "And "
});
formatter.match({
  "location": "HTMLCategorySteps.to_Launch_the_chrome_browser()"
});
formatter.result({
  "duration": 21548351000,
  "status": "passed"
});
formatter.match({
  "location": "HTMLCategorySteps.to_open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 88811018201,
  "status": "passed"
});
formatter.match({
  "location": "HTMLCategorySteps.enter_Email_and_password_in_login_field()"
});
formatter.result({
  "duration": 7855190300,
  "status": "passed"
});
formatter.match({
  "location": "HTMLCategorySteps.click_on_the_Login_Button()"
});
formatter.result({
  "duration": 8651640700,
  "status": "passed"
});
formatter.match({
  "location": "HTMLCategorySteps.click_Shop_icon_Click_HTML_and_buy_the_book()"
});
formatter.result({
  "duration": 42488746800,
  "status": "passed"
});
formatter.match({
  "location": "HTMLCategorySteps.view_the_cart_html_book()"
});
formatter.result({
  "duration": 12949625300,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "To check if the user is able to buy books from HTML category and increase quantity",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-buy-books-from-html-category-and-increase-quantity",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@TC_04_Adding_books_from_HTML_Category_and_increase_quantity_update"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Launch the chrome browser in system",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "To open Practice automation website",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "Enter Email and password in Login",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Clicking Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Click Shop icon  Click HTML and buy the book",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "View the cart, Increase quantity and update",
  "keyword": "And "
});
formatter.match({
  "location": "IncreaseQuantitySteps.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 8899225701,
  "status": "passed"
});
formatter.match({
  "location": "IncreaseQuantitySteps.to_open_Practice_automation_website()"
});
formatter.result({
  "duration": 14887721000,
  "status": "passed"
});
formatter.match({
  "location": "IncreaseQuantitySteps.enter_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 16731949100,
  "status": "passed"
});
formatter.match({
  "location": "IncreaseQuantitySteps.clicking_Login_Button()"
});
formatter.result({
  "duration": 12852785900,
  "status": "passed"
});
formatter.match({
  "location": "IncreaseQuantitySteps.click_Shop_icon_Click_HTML_and_buy_the_book()"
});
formatter.result({
  "duration": 50441800200,
  "status": "passed"
});
formatter.match({
  "location": "IncreaseQuantitySteps.view_the_cart_Increase_quantity_and_update()"
});
formatter.result({
  "duration": 37211679700,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "To check if the mandatory fields are not entered,throws an appropriate error message",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-mandatory-fields-are-not-entered,throws-an-appropriate-error-message",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 50,
      "name": "@TC_05_Checking_Mandatory_fields_in_Billing_details"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "Launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "To open Practice Automation  Website",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "Enter the Email and password in Login field",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "Clicking on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Click Shop button  Click Selenium, buy the book and View cart",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "Click proceed to checkout, enter the mandatory details in billing details and click place order",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "Take Screenshot if mandatory fields are mising",
  "keyword": "And "
});
formatter.match({
  "location": "BillingDetailsSteps.launch_the_chrome_application()"
});
formatter.result({
  "duration": 13579917600,
  "status": "passed"
});
formatter.match({
  "location": "BillingDetailsSteps.to_open_Practice_Automation_Website()"
});
formatter.result({
  "duration": 220144051400,
  "status": "passed"
});
formatter.match({
  "location": "BillingDetailsSteps.enter_the_Email_and_password_in_Login_field()"
});
formatter.result({
  "duration": 19710975499,
  "status": "passed"
});
formatter.match({
  "location": "BillingDetailsSteps.clicking_on_Login_Button()"
});
formatter.result({
  "duration": 10753113601,
  "status": "passed"
});
formatter.match({
  "location": "BillingDetailsSteps.click_Shop_button_Click_Selenium_buy_the_book_and_View_cart()"
});
formatter.result({
  "duration": 35558500701,
  "status": "passed"
});
formatter.match({
  "location": "BillingDetailsSteps.click_proceed_to_checkout_enter_the_mandatory_details_in_billing_details_and_click_place_order()"
});
formatter.result({
  "duration": 32462136799,
  "status": "passed"
});
formatter.match({
  "location": "BillingDetailsSteps.take_Screenshot_if_mandatory_fields_are_mising()"
});
formatter.result({
  "duration": 10418658600,
  "status": "passed"
});
});