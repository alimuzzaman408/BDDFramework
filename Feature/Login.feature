Feature: Login
@SmokeTest
Scenario: User credential successfull
Given  User Open the beowser
When user enter Url "http://demo.guru99.com/V4/"
And enter user name "mngr264380" and password "qUrUzEv"
And Click login button
Then validate  Tilte of the page "Guru99 Bank Manager HomePage"
And close browser

@RegressionTest
Scenario Outline:Login datdriven
Given  User Open the beowser
When user enter Url "http://demo.guru99.com/V4/"
And enter user name "<username>" and password "<password>"
And Click login button
Then validate  Tilte of the page "Guru99 Bank Manager HomePage"
And close browser

Examples:
    |username |password|     
    |mngr264380|qUrUzEv|
    |mngr264380|qUrUzEv|
    |mngr264380|qUrUzEv|