$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/HomePage/01_HomeScreen.feature");
formatter.feature({
  "name": "Home Page Verifications",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Access the application by opening a browser",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@home_page"
    }
  ]
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
formatter.embedding("image/png", "embedded0.png", "Access the application by opening a browser");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the computer database app using \"http://computer-database.gatling.io/computers\"",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.navigateToHomePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", "Access the application by opening a browser");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see a title \"Play sample application — Computer database\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.checkPageTitle(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [Play sample application — Computer database] but found [Computer database]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat applicationPages.Homepage.verifyPageTitle(Homepage.java:34)\r\n\tat stepdefs.HomePageSteps.checkPageTitle(HomePageSteps.java:41)\r\n\tat ✽.I should see a title \"Play sample application — Computer database\"(file:src/test/resources/features/HomePage/01_HomeScreen.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", "Access the application by opening a browser");
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});