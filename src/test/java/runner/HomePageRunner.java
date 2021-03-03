package runner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(tags = { "@home_page" }, glue = { "stepdefs" }, plugin = {
		"html:target/cucumber-reports/HomePage/cucumber-pretty",
		"json:target/json-cucumber-reports/homepage/cukejson.json",
		"testng:target/testng-cucumber-reports/HomePage/cuketestng.xml" }, features = {
				"src/test/resources/features/HomePage" })
public class HomePageRunner extends AbstractTestNGCucumberTests {

}
