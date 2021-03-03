package driverMaster;

import static org.testng.Assert.fail;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Paths;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.SessionId;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.Wait;
import io.cucumber.core.api.Scenario;

public class DriverMaster {

	public static WebDriver driver = null;
	public SessionId session = null;
	public static Properties prop = new Properties();

	public DriverMaster() {
		try {
			prop.load(getFileFromResourceAsStream("config/application.properties"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public static WebDriver getDriver() {
		return driver;
	}

	public void setUpDriver() {
		String browser = prop.getProperty("browser");
		if (browser == null) {
			browser = "chrome";
		}
		switch (browser) {
		case "chrome":
			System.setProperty("webdriver.chrome.driver", getAbsolutePath("lib/chromedriver.exe"));
			ChromeOptions chromeOptions = new ChromeOptions();
			chromeOptions.addArguments("start-maximized");
			driver = new ChromeDriver(chromeOptions);
			driver.manage().window().maximize();
			break;
		case "firefox":
			System.setProperty("webdriver.gecko.driver", getAbsolutePath("lib/geckodriver.exe"));
			driver = new FirefoxDriver();
			driver.manage().window().maximize();
			break;
		default:
			throw new IllegalArgumentException("Browser \"" + browser + "\" isn't supported.");
		}
		
	}

	public void closeDriver(Scenario scenario) {
		driver.close();
		driver.quit();
	}

	public void takeScreenshot(Scenario scenario) {
		String failedScreenshotOnly = prop.getProperty("Failed_Screenshot_only");
		if(failedScreenshotOnly == null) {
			failedScreenshotOnly = "yes";
		}
		switch (failedScreenshotOnly.toLowerCase()) {
		case "1":
		case "yes":
			if (scenario.isFailed()) {
				saveScreenshotsForScenario(scenario);
			}
			break;
		case "0":
		case "no":
			saveScreenshotsForScenario(scenario);
			break;
		default:
			throw new IllegalArgumentException("Screenshot option is wrong. Only possible ooptions are Yes/No/1/0.");
		}
	}
	
	private void saveScreenshotsForScenario(final Scenario scenario) {
		final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
		scenario.embed(screenshot, "image/png", scenario.getName());
	}

	public void waitForPageLoad(int timeout) {
		ExpectedConditions.jsReturnsValue("return document.readyState==\"complete\";");
	}

	public String getSpecificColumnData(String FilePath, String SheetName, String ColumnName)
			throws InvalidFormatException, IOException, URISyntaxException {
		FileInputStream fis = new FileInputStream(new File(getClass().getClassLoader().getResource(FilePath).toURI()));
		XSSFWorkbook workbook = new XSSFWorkbook(fis);
		XSSFSheet sheet = workbook.getSheet(SheetName);
		XSSFRow row = sheet.getRow(0);
		int col_num = -1;
		for (int i = 0; i < row.getLastCellNum(); i++) {
			if (row.getCell(i).getStringCellValue().trim().equals(ColumnName))
				col_num = i;
		}
		row = sheet.getRow(1);
		XSSFCell cell = row.getCell(col_num);
		String value = cell.getStringCellValue();
		fis.close();
		System.out.println("Value of the Excel Cell is - " + value);
		return value;
	}

	public void setSpecificColumnData(String FilePath, String SheetName, String ColumnName) throws IOException, URISyntaxException {
		FileInputStream fis;
		fis = new FileInputStream(new File(getClass().getClassLoader().getResource(FilePath).toURI()));
		FileOutputStream fos = null;
		XSSFWorkbook workbook = new XSSFWorkbook(fis);
		XSSFSheet sheet = workbook.getSheet(SheetName);
		XSSFRow row = null;
		XSSFCell cell = null;
		XSSFFont font = workbook.createFont();
		XSSFCellStyle style = workbook.createCellStyle();
		int col_Num = -1;
		row = sheet.getRow(0);
		for (int i = 0; i < row.getLastCellNum(); i++) {
			if (row.getCell(i).getStringCellValue().trim().equals(ColumnName)) {
				col_Num = i;
			}
		}
		row = sheet.getRow(1);
		if (row == null)
			row = sheet.createRow(1);
		cell = row.getCell(col_Num);
		if (cell == null)
			cell = row.createCell(col_Num);
		font.setFontName("Comic Sans MS");
		font.setFontHeight(14.0);
		font.setBold(true);
		font.setColor(HSSFColor.WHITE.index);
		style.setFont(font);
		style.setFillForegroundColor(HSSFColor.GREEN.index);
		style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
		cell.setCellStyle(style);
		cell.setCellValue("PASS");
		fos = new FileOutputStream(FilePath);
		workbook.write(fos);
		fos.close();
	}

	public void openSite(String URL) {
		driver.get(URL);
	}
	
	public By getElementWithLocator(String WebElement) throws Exception {
		String locatorTypeAndValue = prop.getProperty(WebElement);
		String[] locatorTypeAndValueArray = locatorTypeAndValue.split(",");
		String locatorType = locatorTypeAndValueArray[0].trim();
		String locatorValue = locatorTypeAndValueArray[1].trim();
		switch (locatorType.toUpperCase()) {
		case "ID":
			return By.id(locatorValue);
		case "NAME":
			return By.name(locatorValue);
		case "TAGNAME":
			return By.tagName(locatorValue);
		case "LINKTEXT":
			return By.linkText(locatorValue);
		case "PARTIALLINKTEXT":
			return By.partialLinkText(locatorValue);
		case "XPATH":
			return By.xpath(locatorValue);
		case "CSS":
			return By.cssSelector(locatorValue);
		case "CLASSNAME":
			return By.className(locatorValue);
		default:
			return null;
		}
	}

	public WebElement FindAnElement(String WebElement) throws Exception {
		return driver.findElement(getElementWithLocator(WebElement));
	}

	public String PerformActionOnElement(String WebElement, String Action, String Text) throws Exception {
		String returnvalue = "";
		switch (Action) {
		case "Click":
			FindAnElement(WebElement).click();
			break;
		case "Type":
			FindAnElement(WebElement).sendKeys(Text);
			break;
		case "Clear":
			FindAnElement(WebElement).clear();
			break;
		case "Read":
			returnvalue = FindAnElement(WebElement).getText();
			break;
		case "Select":
			Select ele = new Select(FindAnElement(WebElement));
			ele.selectByVisibleText(Text);
			break;
		case "WaitForElementDisplay":
			waitForCondition("Presence", WebElement, 60);
			break;
		case "WaitForElementClickable":
			waitForCondition("Clickable", WebElement, 60);
			break;
		case "ElementNotDisplayed":
			waitForCondition("NotPresent", WebElement, 60);
			break;
		default:
			throw new IllegalArgumentException("Action \"" + Action + "\" isn't supported.");
		}
		return returnvalue;
	}

	public void waitForCondition(String TypeOfWait, String WebElement, int Time) {
		try {
			@SuppressWarnings("deprecation")
			Wait<WebDriver> wait = new FluentWait<WebDriver>(driver).withTimeout(Time, TimeUnit.SECONDS)
					.pollingEvery(5, TimeUnit.SECONDS).ignoring(Exception.class);
			switch (TypeOfWait) {
			case "PageLoad":
				wait.until(ExpectedConditions.jsReturnsValue("return document.readyState==\"complete\";"));
				break;
			case "Clickable":
				wait.until(ExpectedConditions.elementToBeClickable(FindAnElement(WebElement)));
				break;
			case "Presence":
				wait.until(ExpectedConditions.presenceOfElementLocated(getElementWithLocator(WebElement)));
				break;
			case "Visibility":
				wait.until(ExpectedConditions.visibilityOfElementLocated(getElementWithLocator(WebElement)));
				break;
			case "NotPresent":
				wait.until(ExpectedConditions.invisibilityOfElementLocated(getElementWithLocator(WebElement)));
				break;
			default:
				Thread.sleep(Time * 1000);
			}
		} catch (Exception e) {
			throw new IllegalArgumentException("wait For Condition \"" + TypeOfWait + "\" isn't supported for -> " + WebElement);
		}
	}

	private InputStream getFileFromResourceAsStream(String fileName) {
		// The class loader that loaded the class
		InputStream inputStream = getClass().getClassLoader().getResourceAsStream(fileName);

		// the stream holding the file content
		if (inputStream == null) {
			throw new IllegalArgumentException("file not found! " + fileName);
		} else {
			return inputStream;
		}

	}
	
	private String getAbsolutePath(String path){
		try {
			URL res = getClass().getClassLoader().getResource(path);
			File file = Paths.get(res.toURI()).toFile();
			return file.getAbsolutePath();
		} catch (URISyntaxException e) {
			e.printStackTrace();
		}
		return null;
	}
}
