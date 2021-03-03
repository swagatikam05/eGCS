package applicationPages;

import static org.testng.Assert.assertEquals;

import driverMaster.DriverMaster;

public class AddComputerPage {
	private DriverMaster dm;

	public AddComputerPage(DriverMaster dm) {
		this.dm = dm;
	}

	public void waitPageLoad() {
		this.dm.waitForPageLoad(60);
	}

	public void verifyPageTitle(String expectedTitle) throws Exception {
		assertEquals(this.dm.PerformActionOnElement("AddComputerPageTile", "Read", ""), expectedTitle);
	}

	public void clickCancel() throws Exception {
		this.dm.PerformActionOnElement("AddComputerCancelBtn", "Click", "");
	}

	public void verifyAddNewComputerButtonPesent() throws Exception {
		this.dm.PerformActionOnElement("AddNewComputerButton", "WaitForElementDisplay", "");
	}

	public void verifyCreateComputerButtonPesent() throws Exception {
		this.dm.PerformActionOnElement("CreateComputerButton", "WaitForElementClickable", "");
	}

	public void clickAddComputer() throws Exception {
		this.dm.PerformActionOnElement("CreateComputerButton", "Click", "");
	}
	
	public void selectCompany(String compName) throws Exception {
		// select company name from dropdown
		this.dm.PerformActionOnElement("CompanyDropdown", "Select", compName);
	}

	public void enterComputerName(String computerName) throws Exception {
		// Enter computer name in the textbox
		this.dm.PerformActionOnElement("ComputerNameTxtbox", "Type", computerName);
	}

	public void verifyElementPresentAndClickable(String field, String type) throws Exception {
		switch (type.toLowerCase()) {
		case "free input":
			// check if label present
			this.dm.PerformActionOnElement(field.replace(" ", "_")+"_label", "WaitForElementDisplay", "");
			// check if label name is as expected
			assertEquals(this.dm.PerformActionOnElement(field.replace(" ", "_")+"_label", "Read", ""), field);
			// check control present for the label
			this.dm.PerformActionOnElement(field.replace(" ", "_")+"_input", "WaitForElementDisplay", "");
			// check the type of control
			assertEquals(this.dm.FindAnElement(field.replace(" ", "_")+"_input").getTagName().toLowerCase(), "input");
			break;
		case "button":
			// check if the button present
			this.dm.PerformActionOnElement(field.replace(" ", "_"), "WaitForElementDisplay", "");
			// verify the text of button
			assertEquals(this.dm.PerformActionOnElement(field.replace(" ", "_"), "Read", ""), field);
			break;
		}
	}

}