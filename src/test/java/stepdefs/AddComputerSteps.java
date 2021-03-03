package stepdefs;

import java.util.List;
import java.util.Map;

import applicationPages.AddComputerPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.But;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AddComputerSteps {

	private AddComputerPage page;

	public AddComputerSteps(AddComputerPage page) {
		this.page = page;
	}

	@Then("^I should be taken to the new section to update the database$")
	public void i_should_be_taken_to_the_new_section_to_update_the_database() throws Throwable {
		this.page.waitPageLoad();
	}

	@And("The new section should have a heading of {string}")
	public void the_new_section_should_have_a_heading_of_something(String title) throws Throwable {
		this.page.verifyPageTitle(title);
	}

	@When("I click {string}")
	public void i_click_add_this_computer(String addThisComputer) throws Throwable {
		this.page.clickAddComputer();
	}

	@When("^I click cancel$")
	public void i_click_cancel() throws Throwable {
		this.page.clickCancel();
	}

	@Then("^I should see four fields labelled \"([^\"]*)\" with a type of \"([^\"]*)\"$")
	public void i_should_see_four_fields_labelledsomething_with_a_type_of_something(String field, String type,
			Map<String, String> table) throws Throwable {
		for (Map.Entry<String, String> entry : table.entrySet()) {
			this.page.verifyElementPresentAndClickable(entry.getKey(), entry.getValue());
		}
	}

	@Then("^It should not allow you to save$")
	public void it_should_not_allow_you_to_save() throws Throwable {
		this.page.verifyCreateComputerButtonPesent();
	}

	@Then("^It should take me back to the main computer database view$")
	public void it_should_take_me_back_to_the_main_computer_database_view() throws Throwable {
		this.page.verifyAddNewComputerButtonPesent();
	}

	@And("^I should see two buttons named \"([^\"]*)\"$")
	public void i_should_see_two_buttons_named_something(String buttons, List<String> btns) throws Throwable {
		for (String btn : btns) {
			this.page.verifyElementPresentAndClickable(btn, "button");
		}
	}

	@And("^I am already adding a computer in the Add a New Computer view$")
	public void i_am_already_adding_a_computer_in_the_add_a_new_computer_view() throws Throwable {
		this.page.verifyCreateComputerButtonPesent();
	}

	@And("^I have already entered a name for a computer$")
	public void i_have_already_entered_a_name_for_a_computer() throws Throwable {
		this.page.verifyCreateComputerButtonPesent();
	}

	@And("^It should indicate which fields are mandatory$")
	public void it_should_indicate_which_fields_are_mandatory() throws Throwable {
		// TODO: Check the css change with red background
	}

	@And("^I am already entering a new computer into the system$")
	public void i_am_already_entering_a_new_computer_into_the_system() throws Throwable {
		this.page.enterComputerName("Cancel Computer");
		this.page.selectCompany("Apple Inc.");
	}

	@But("^Have not entered data into other fields$")
	public void have_not_entered_data_into_other_fields() throws Throwable {
	}

	@But("^I need to stop what I am doing and go back to the main view$")
	public void i_need_to_stop_what_i_am_doing_and_go_back_to_the_main_view() throws Throwable {
	}
}
