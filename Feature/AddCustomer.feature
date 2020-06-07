Feature: customer
Background: bellow are the common step
Given  User Open the beowser
When user enter Url "http://demo.guru99.com/V4/"
And enter user name "mngr264380" and password "qUrUzEv"
And Click login button
Then validate  Tilte of the page "Guru99 Bank Manager HomePage"


Scenario: Adding new customer
When  click new customer button
Then add customer information
Then click submit button
Then validate customer added successfully message
And close browser

Scenario: Edit customer by id
When user click edit button
Then enter cutomer_id
Then click submit
Then update customer name
Then click submit button
And close browser
