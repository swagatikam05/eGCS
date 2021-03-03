package runner;

import constantVariables.Constant;
import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions( tags = {Constant.tags},glue = {Constant.glue}, plugin = {"html:target/cucumber-reports/computergrid/cucumber-pretty","json:target/json-cucumber-reports/blogpage/cukejson.json",
		"testng:target/testng-cucumber-reports/computergrid/cuketestng.xml" }, features = {"src/test/resources/features/ComputerGrid"})
public class AddComputerRunner extends AbstractTestNGCucumberTests {
	
}
