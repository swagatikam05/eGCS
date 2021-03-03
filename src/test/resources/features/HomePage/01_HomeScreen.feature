# Application URL: http://computer-database.herokuapp.com/computers
# Backup application URL if above not working http://computer-database.gatling.io/computers
Feature: Home Page Verifications

  @home_page
  Scenario: Access the application by opening a browser
    Given I am using a web browser
    When I navigate to the computer database app using "http://computer-database.gatling.io/computers"
    Then I should see a title "Play sample application — Computer database"