package com.BDDFramework.step;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.junit.Assert;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import com.BDDFramework.page.Addcustomer;
import com.BDDFramework.page.LoginPage;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Step extends Base{

	@Before
	public void setup() throws IOException {

		logger=Logger.getLogger("BDDFramework");
		PropertyConfigurator.configure("log4j.properties");
		prop=new Properties();
		FileInputStream fileinput=new FileInputStream(".//Configur//config.properties");
		prop.load(fileinput);
		String br=prop.getProperty("browser");

		if(br.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver", prop.getProperty("chromepath"));
			driver=new ChromeDriver();

		}else if(br.equals("firefox")) {
			System.setProperty("webdriver.gecko.driver", prop.getProperty("geckopath"));
			driver=new FirefoxDriver();

		}

	}


	@Given("^User Open the beowser$")
	public void user_Open_the_beowser()  {	
		lp=new LoginPage(driver);
		addcus=new Addcustomer(driver);
		logger.info("******************Browser opened************");

	}

	@When("^user enter Url \"([^\"]*)\"$")
	public void user_enter_Url(String url)  {
		logger.info("******************url entered************");
		driver.get(url);

	}

	@When("^enter user name \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void enter_user_name_and_password(String user, String pass)  {
		logger.info("******************customer credential entered************");
		lp.setusername(user);
		lp.setpassword(pass);


	}
	@When("^Click login button$")
	public void click_login_button() {
		logger.info("******************login the page************");
		lp.clicklogin();
	}

	@Then("^validate  Tilte of the page \"([^\"]*)\"$")
	public void validate_Tilte_of_the_page(String title)  {
		driver.getTitle();
		logger.info("******************Title validate passed************");
		Assert.assertEquals(title,"Guru99 Bank Manager HomePage");

	}

	@When("^click new customer button$")
	public void click_new_customer_button()  {
		addcus.clickcustomer();
	}

	@Then("^add customer information$")	
	public void add_customer_information() {
		logger.info("******************Added new customer************");
		addcus.setcustomer("Ali");
		addcus.genderclass("Male");
		addcus.enterdate("12", "30", "1981");
		addcus.cusaddress("Queens");
		addcus.customercity("Newyork");
		addcus.customerstate("NY");
		addcus.customerpinno("123456");

		addcus.customertelephone("6466376994");
		addcus.customeremail("kc1azamn@gmail.com");

		addcus.customerpassword("123456");

	}

	@Then("^click submit button$")
	public void click_submit_button() {
		logger.info("******************Added  custome submittedr************");
		addcus.clicksubmit();
	}

	@Then("^validate customer added successfully message$")
	public void validate_customer_added_successfully_message() {
		if(driver.getPageSource().contains("Customer Registered Successfully!!!")) {
			logger.info("******************Added new customer passed************");
			System.out.println( "Test case passed");

		}else {
			logger.info("******************Added new customer failed************");
			System.out.println( "Test case failed");

		}

	}
	@When("^user click edit button$")
	public void user_click_edit_button()  {

		addcus.edit();

	}
	@Then("^enter cutomer_id$")
	public void enter_cutomer_id()  {
		addcus.enterid("8699");
	}

	@Then("^click submit$")
	public void click_submit()  {
		addcus.submit();  
	}

	@Then("^update customer name$")
	public void update_customer_name()  {
		addcus.replacename("Ali");
	}

	@Then("^close browser$")
	public void close_browser() {
		driver.quit();
	}
}
