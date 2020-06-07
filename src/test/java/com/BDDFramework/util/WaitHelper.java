package com.BDDFramework.util;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class WaitHelper {
	public WebDriver driver;

	WaitHelper(WebDriver driver){

		this.driver=driver;

	}

	public void waitforElement(WebElement element,long timeoutinsecond) {

		WebDriverWait wait=new WebDriverWait(driver,timeoutinsecond);
		wait.until(ExpectedConditions.invisibilityOf(element));

	}



}
