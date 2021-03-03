package applicationPages;

import driverMaster.DriverMaster;

import static org.testng.Assert.assertEquals;

import io.cucumber.core.api.Scenario;

public class Homepage {
	private DriverMaster dm;

	public Homepage(DriverMaster dm) {
		this.dm = dm;
	}

	public void closeBrowser(Scenario scenario) {
		this.dm.closeDriver(scenario);
	}

	public void openBrowser() {
		this.dm.setUpDriver();
	}
	
	public void goToHomePage(String URL) {
		this.dm.openSite(URL);
		this.dm.waitForCondition("PageLoad", "", 60);
	}

	public void addNewComputer() throws Exception {
		this.dm.PerformActionOnElement("AddNewComputerButton", "Click", "");
	}

	public void verifyPageTitle(String expectedTitle) throws Exception {
		assertEquals(this.dm.PerformActionOnElement("HomePageTile", "Read", ""), expectedTitle);
	}

	public void verifyAddNewButtonPresent() throws Exception {
		this.dm.PerformActionOnElement("AddNewComputerButton", "WaitForElementClickable", "");
	}

	public void verifyAddNewButtonPresentWithText(String expectedButtonText) throws Exception {
		this.dm.PerformActionOnElement("AddNewComputerButton", "WaitForElementDisplay", "");
		assertEquals(this.dm.PerformActionOnElement("AddNewComputerButton", "Read", ""), expectedButtonText);		
	}

	public void isAtHomePage() {
		this.dm.waitForPageLoad(60);
		
	}

	public void clickAddNewComputerButton() throws Exception {
		this.dm.PerformActionOnElement("AddNewComputerButton", "Click", "");
	}

	public void takeScreenShot(Scenario scenario) {
		this.dm.takeScreenshot(scenario);
	}
}