package com.BDDFramework.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;



public class Addcustomer {
	WebDriver ldriver;

	public Addcustomer(WebDriver sdriver) {

		ldriver=sdriver;
		PageFactory.initElements(ldriver, this);

	}


	@FindBy(how = How.XPATH, using ="//a[contains(text(),'New Customer')]")
	@CacheLookup
	WebElement newcustomer;

	@FindBy(name="name")
	@CacheLookup
	WebElement cusname;

	@FindBy(name="rad1")
	@CacheLookup
	WebElement gender;

	@FindBy(name="dob")
	@CacheLookup
	WebElement Date;


	@FindBy(name="addr")
	@CacheLookup
	WebElement address;

	@FindBy(name="city")
	@CacheLookup
	WebElement city;

	@FindBy(name="state")
	@CacheLookup
	WebElement State;

	@FindBy(name="pinno")
	@CacheLookup
	WebElement Pinno;

	@FindBy(name="telephoneno")
	@CacheLookup
	WebElement telephone;

	@FindBy(name="emailid")
	@CacheLookup
	WebElement email;

	@FindBy(name="password")
	@CacheLookup
	WebElement password;

	@FindBy(xpath="//input[@name='sub']")
	@CacheLookup
	WebElement submit;


	@FindBy(xpath="//a[contains(text(),'Edit Customer')]")
	@CacheLookup
	WebElement editcustomer1;

	@FindBy(xpath="//input[@name='name']")
	@CacheLookup
	WebElement updatename;
	@FindBy(xpath="//input[@name='cusid']")
	@CacheLookup
	WebElement searchbox;

	
	@FindBy(xpath="//input[@name='AccSubmit']")
	@CacheLookup
	WebElement searhclick;
	public void clickcustomer() {
		newcustomer.click();;
	}
	public void setcustomer(String name) {
		cusname.sendKeys(name);
	}
	public void genderclass(String mal) {
		gender.click();
	} 
	public void enterdate(String mm,String dd,String yy) {
		Date.sendKeys(dd);
		Date.sendKeys(yy);
	}

	public void cusaddress(String addrs) {

		address.sendKeys(addrs);;
	}

	public void customercity(String citi) {
		city.sendKeys(citi);;
	}

	public void customerstate(String stat) {
		State.sendKeys(stat);
	}

	public void customerpinno(String pinnum) {
		Pinno.sendKeys(String.valueOf(pinnum));
	}
	public void customertelephone(String telepho) {
		telephone.sendKeys(telepho);
	}

	public void customeremail(String emailid) {
		email.sendKeys(emailid);;
	}

	public void customerpassword(String passw) {
		password.sendKeys(passw);
	}
	public void edit() {
		editcustomer1.click();
	}
	public void replacename(String newname) {
		updatename.clear();
		updatename.sendKeys(newname);	
	}

	public void enterid(String idnumber) {
		searchbox.sendKeys(idnumber);
	}
	public void submit() {
		searhclick.click();
	}
	
	public void clicksubmit() {

		submit.click();
	}
}
