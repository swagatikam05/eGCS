$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ComputerGrid/01_New_Computers.feature");
formatter.feature({
  "name": "It Should allow users to add new computers to the database for searching at a later date",
  "description": "  As A product manager\n  I want frontend users to be able to update the database\n  So That I dont have to book time with a database administrator",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@2020feature"
    },
    {
      "name": "@core"
    },
    {
      "name": "@critical"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I am using a web browser",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.openBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", "There should be a link to the new section that allows users to add computers to the database");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the computer database app using \"http://computer-database.gatling.io/computers\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.navigateToHomePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", "There should be a link to the new section that allows users to add computers to the database");
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be a link to the new section that allows users to add computers to the database",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@2020feature"
    },
    {
      "name": "@core"
    },
    {
      "name": "@critical"
    }
  ]
});
formatter.step({
  "name": "I am already on the database application",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.i_am_already_on_the_database_application()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", "There should be a link to the new section that allows users to add computers to the database");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see a new button called \"Add a New Computer\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.i_should_see_a_new_button_called_something(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [Add a New Computer] but found [Add a new computer]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat applicationPages.Homepage.verifyAddNewButtonPresentWithText(Homepage.java:43)\r\n\tat stepdefs.HomePageSteps.i_should_see_a_new_button_called_something(HomePageSteps.java:46)\r\n\tat ✽.I should see a new button called \"Add a New Computer\"(file:src/test/resources/features/ComputerGrid/01_New_Computers.feature:13)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png", "There should be a link to the new section that allows users to add computers to the database");
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I am using a web browser",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.openBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", "It should be possible to open the new section");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the computer database app using \"http://computer-database.gatling.io/computers\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.navigateToHomePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", "It should be possible to open the new section");
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "It should be possible to open the new section",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@2020feature"
    },
    {
      "name": "@core"
    },
    {
      "name": "@critical"
    }
  ]
});
formatter.step({
  "name": "I am already on the database application",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.i_am_already_on_the_database_application()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png", "It should be possible to open the new section");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "the link to the new section is present",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.the_link_to_the_new_section_is_present()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png", "It should be possible to open the new section");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on the link",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.i_click_on_the_link()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png", "It should be possible to open the new section");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should be taken to the new section to update the database",
  "keyword": "Then "
});
formatter.match({
  "location": "AddComputerSteps.i_should_be_taken_to_the_new_section_to_update_the_database()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png", "It should be possible to open the new section");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "The new section should have a heading of \"Add a New Computer\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddComputerSteps.the_new_section_should_have_a_heading_of_something(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [Add a New Computer] but found [Add a computer]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat applicationPages.AddComputerPage.verifyPageTitle(AddComputerPage.java:19)\r\n\tat stepdefs.AddComputerSteps.the_new_section_should_have_a_heading_of_something(AddComputerSteps.java:27)\r\n\tat ✽.The new section should have a heading of \"Add a New Computer\"(file:src/test/resources/features/ComputerGrid/01_New_Computers.feature:20)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded10.png", "It should be possible to open the new section");
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I am using a web browser",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.openBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png", "It should have four new fields and two buttons in the new section");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the computer database app using \"http://computer-database.gatling.io/computers\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.navigateToHomePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded12.png", "It should have four new fields and two buttons in the new section");
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "It should have four new fields and two buttons in the new section",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@2020feature"
    },
    {
      "name": "@core"
    },
    {
      "name": "@critical"
    }
  ]
});
formatter.step({
  "name": "I am already on the database application",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.i_am_already_on_the_database_application()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded13.png", "It should have four new fields and two buttons in the new section");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on the link",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.i_click_on_the_link()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded14.png", "It should have four new fields and two buttons in the new section");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see four fields labelled \"\u003cfields\u003e\" with a type of \"\u003ctype\u003e\"",
  "rows": [
    {
      "cells": [
        "fields",
        "type"
      ]
    },
    {
      "cells": [
        "Computer Name",
        "Free input"
      ]
    },
    {
      "cells": [
        "Introduced Date",
        "Free input"
      ]
    },
    {
      "cells": [
        "Discontinued Date",
        "Free input"
      ]
    },
    {
      "cells": [
        "Manufacturer",
        "Free input"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AddComputerSteps.i_should_see_four_fields_labelledsomething_with_a_type_of_something(String,String,String,String\u003e)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [Computer Name] but found [Computer name]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat applicationPages.AddComputerPage.verifyElementPresentAndClickable(AddComputerPage.java:54)\r\n\tat stepdefs.AddComputerSteps.i_should_see_four_fields_labelledsomething_with_a_type_of_something(AddComputerSteps.java:44)\r\n\tat ✽.I should see four fields labelled \"\u003cfields\u003e\" with a type of \"\u003ctype\u003e\"(file:src/test/resources/features/ComputerGrid/01_New_Computers.feature:25)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded15.png", "It should have four new fields and two buttons in the new section");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see two buttons named \"\u003cbuttons\u003e\"",
  "rows": [
    {
      "cells": [
        "Add Computer"
      ]
    },
    {
      "cells": [
        "Cancel"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AddComputerSteps.i_should_see_two_buttons_named_something(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I am using a web browser",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.openBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded16.png", "It should not allow new computers to be added unless all fields are populated");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the computer database app using \"http://computer-database.gatling.io/computers\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.navigateToHomePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded17.png", "It should not allow new computers to be added unless all fields are populated");
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "It should not allow new computers to be added unless all fields are populated",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@2020feature"
    },
    {
      "name": "@core"
    },
    {
      "name": "@critical"
    }
  ]
});
formatter.step({
  "name": "I am already on the database application",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.i_am_already_on_the_database_application()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded18.png", "It should not allow new computers to be added unless all fields are populated");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on the link",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.i_click_on_the_link()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded19.png", "It should not allow new computers to be added unless all fields are populated");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I am already adding a computer in the Add a New Computer view",
  "keyword": "And "
});
formatter.match({
  "location": "AddComputerSteps.i_am_already_adding_a_computer_in_the_add_a_new_computer_view()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded20.png", "It should not allow new computers to be added unless all fields are populated");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I have already entered a name for a computer",
  "keyword": "And "
});
formatter.match({
  "location": "AddComputerSteps.i_have_already_entered_a_name_for_a_computer()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded21.png", "It should not allow new computers to be added unless all fields are populated");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Have not entered data into other fields",
  "keyword": "But "
});
formatter.match({
  "location": "AddComputerSteps.have_not_entered_data_into_other_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded22.png", "It should not allow new computers to be added unless all fields are populated");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Add This Computer\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddComputerSteps.i_click_add_this_computer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded23.png", "It should not allow new computers to be added unless all fields are populated");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "It should not allow you to save",
  "keyword": "Then "
});
formatter.match({
  "location": "AddComputerSteps.it_should_not_allow_you_to_save()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded24.png", "It should not allow new computers to be added unless all fields are populated");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "It should indicate which fields are mandatory",
  "keyword": "And "
});
formatter.match({
  "location": "AddComputerSteps.it_should_indicate_which_fields_are_mandatory()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded25.png", "It should not allow new computers to be added unless all fields are populated");
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I am using a web browser",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.openBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded26.png", "It Should allow me to cancel the operation");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the computer database app using \"http://computer-database.gatling.io/computers\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.navigateToHomePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded27.png", "It Should allow me to cancel the operation");
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "It Should allow me to cancel the operation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@2020feature"
    },
    {
      "name": "@core"
    },
    {
      "name": "@critical"
    }
  ]
});
formatter.step({
  "name": "I am already on the database application",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.i_am_already_on_the_database_application()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded28.png", "It Should allow me to cancel the operation");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on the link",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.i_click_on_the_link()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded29.png", "It Should allow me to cancel the operation");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I am already entering a new computer into the system",
  "keyword": "And "
});
formatter.match({
  "location": "AddComputerSteps.i_am_already_entering_a_new_computer_into_the_system()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded30.png", "It Should allow me to cancel the operation");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I need to stop what I am doing and go back to the main view",
  "keyword": "But "
});
formatter.match({
  "location": "AddComputerSteps.i_need_to_stop_what_i_am_doing_and_go_back_to_the_main_view()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded31.png", "It Should allow me to cancel the operation");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click cancel",
  "keyword": "When "
});
formatter.match({
  "location": "AddComputerSteps.i_click_cancel()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded32.png", "It Should allow me to cancel the operation");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "It should take me back to the main computer database view",
  "keyword": "Then "
});
formatter.match({
  "location": "AddComputerSteps.it_should_take_me_back_to_the_main_computer_database_view()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded33.png", "It Should allow me to cancel the operation");
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});