package stepdefs;

import applicationPages.Homepage;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.AfterStep;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class HomePageSteps {
	private Homepage homePage;

	public HomePageSteps(Homepage homePage) {
		this.homePage = homePage;
	}

	@After
	public void after(Scenario scenario) {
		this.homePage.closeBrowser(scenario);
	}
	
	@AfterStep
	public void afterStep(Scenario scenario) throws InterruptedException {
		this.homePage.takeScreenShot(scenario);
	}

	@Given("^I am using a web browser$")
	public void openBrowser() {
		this.homePage.openBrowser();
	}

	@When("I navigate to the computer database app using {string}")
	public void navigateToHomePage(String URL) {
		this.homePage.goToHomePage(URL);
	}

	@Then("I should see a title {string}")
	public void checkPageTitle(String title) throws Exception {
		this.homePage.verifyPageTitle(title);
	}

	@Then("I should see a new button called {string}")
	public void i_should_see_a_new_button_called_something(String buttonText) throws Throwable {
		this.homePage.verifyAddNewButtonPresentWithText(buttonText);
	}
	
	@Given("^I am already on the database application$")
    public void i_am_already_on_the_database_application() throws Throwable {
		this.homePage.isAtHomePage();
    }
	
	@And("^the link to the new section is present$")
    public void the_link_to_the_new_section_is_present() throws Throwable {
		this.homePage.verifyAddNewButtonPresent();
    }
	
	@When("^I click on the link$")
    public void i_click_on_the_link() throws Throwable {
        this.homePage.clickAddNewComputerButton();
    }
}
