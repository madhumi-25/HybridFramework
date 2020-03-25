package com.practiceautomation.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

	@RunWith(Cucumber.class)
	@CucumberOptions 
		(
			features = "src/main/resources/Feature/TestCase.feature",
			plugin = {"pretty", "html:reports/cucumber-html-report","json:reports/cucumber-json-report/jsonreport","com.cucumber.listener.ExtentCucumberFormatter:reports/cucumber-extent-report/extentreport.html"},
//			tags = {"@TC_04_Adding_books_from_HTML_Category_and_increase_quantity_update"},
			glue = {"com.practiceautomation.stepdefinition"},
			monochrome = true
		)
	public class PracticeAutomationRunnerClass 
	{
		@AfterClass
	    public static void writeExtentReport() 
		{
	        Reporter.loadXMLConfig("src/test/resources/extent-config.xml");
	        
	    }
	}                                      

