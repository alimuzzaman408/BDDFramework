package com.BDDFramework.step;

import java.util.Properties;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import com.BDDFramework.page.Addcustomer;
import com.BDDFramework.page.LoginPage;

public class Base {
	public Addcustomer addcus;
	public WebDriver driver;
	public LoginPage lp;
	public Logger logger;
	public Properties prop;


public  static String randomstring() {
	
	String generatedString=RandomStringUtils.randomAlphabetic(5);
			return (generatedString);
	
}
public  static String randomnumber() {
	
	String generatednumber=RandomStringUtils.randomNumeric(5);
			return (generatednumber);
	
}
}
