$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Feature/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User credential successfull",
  "description": "",
  "id": "login;user-credential-successfull",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User Open the beowser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter Url \"http://demo.guru99.com/V4/\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter user name \"mngr264380\" and password \"qUrUzEv\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "validate  Tilte of the page \"Find a Flight: Mercury Tours:\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Step.user_Open_the_beowser()"
});
formatter.result({
  "duration": 5227548000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.guru99.com/V4/",
      "offset": 16
    }
  ],
  "location": "Step.user_enter_Url(String)"
});
formatter.result({
  "duration": 6767021700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr264380",
      "offset": 17
    },
    {
      "val": "qUrUzEv",
      "offset": 43
    }
  ],
  "location": "Step.enter_user_name_and_password(String,String)"
});
formatter.result({
  "duration": 310683900,
  "status": "passed"
});
formatter.match({
  "location": "Step.click_login_button()"
});
formatter.result({
  "duration": 987137500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Flight: Mercury Tours:",
      "offset": 29
    }
  ],
  "location": "Step.validate_Tilte_of_the_page(String)"
});
formatter.result({
  "duration": 67807400,
  "status": "passed"
});
formatter.match({
  "location": "Step.close_browser()"
});
formatter.result({
  "duration": 1006704600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Login datdriven",
  "description": "",
  "id": "login;login-datdriven",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User Open the beowser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user enter Url \"http://demo.guru99.com/V4/\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "enter user name \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "validate  Tilte of the page \"Find a Flight: Mercury Tours:\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "login;login-datdriven;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 23,
      "id": "login;login-datdriven;;1"
    },
    {
      "cells": [
        "mngr264380",
        "qUrUzEv"
      ],
      "line": 24,
      "id": "login;login-datdriven;;2"
    },
    {
      "cells": [
        "mngr264380",
        "qUrUzEv"
      ],
      "line": 25,
      "id": "login;login-datdriven;;3"
    },
    {
      "cells": [
        "mngr264380",
        "qUrUzEv"
      ],
      "line": 26,
      "id": "login;login-datdriven;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Login datdriven",
  "description": "",
  "id": "login;login-datdriven;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User Open the beowser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user enter Url \"http://demo.guru99.com/V4/\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "enter user name \"mngr264380\" and password \"qUrUzEv\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "validate  Tilte of the page \"Find a Flight: Mercury Tours:\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Step.user_Open_the_beowser()"
});
formatter.result({
  "duration": 3468886400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.guru99.com/V4/",
      "offset": 16
    }
  ],
  "location": "Step.user_enter_Url(String)"
});
formatter.result({
  "duration": 9049378400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr264380",
      "offset": 17
    },
    {
      "val": "qUrUzEv",
      "offset": 43
    }
  ],
  "location": "Step.enter_user_name_and_password(String,String)"
});
formatter.result({
  "duration": 343270100,
  "status": "passed"
});
formatter.match({
  "location": "Step.click_login_button()"
});
formatter.result({
  "duration": 1199297400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Flight: Mercury Tours:",
      "offset": 29
    }
  ],
  "location": "Step.validate_Tilte_of_the_page(String)"
});
formatter.result({
  "duration": 12516200,
  "status": "passed"
});
formatter.match({
  "location": "Step.close_browser()"
});
formatter.result({
  "duration": 1185394000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Login datdriven",
  "description": "",
  "id": "login;login-datdriven;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User Open the beowser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user enter Url \"http://demo.guru99.com/V4/\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "enter user name \"mngr264380\" and password \"qUrUzEv\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "validate  Tilte of the page \"Find a Flight: Mercury Tours:\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Step.user_Open_the_beowser()"
});
formatter.result({
  "duration": 3654517400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.guru99.com/V4/",
      "offset": 16
    }
  ],
  "location": "Step.user_enter_Url(String)"
});
formatter.result({
  "duration": 2265569300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr264380",
      "offset": 17
    },
    {
      "val": "qUrUzEv",
      "offset": 43
    }
  ],
  "location": "Step.enter_user_name_and_password(String,String)"
});
formatter.result({
  "duration": 749999900,
  "status": "passed"
});
formatter.match({
  "location": "Step.click_login_button()"
});
formatter.result({
  "duration": 3706855400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Flight: Mercury Tours:",
      "offset": 29
    }
  ],
  "location": "Step.validate_Tilte_of_the_page(String)"
});
formatter.result({
  "duration": 10980700,
  "status": "passed"
});
formatter.match({
  "location": "Step.close_browser()"
});
formatter.result({
  "duration": 797864300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Login datdriven",
  "description": "",
  "id": "login;login-datdriven;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User Open the beowser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user enter Url \"http://demo.guru99.com/V4/\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "enter user name \"mngr264380\" and password \"qUrUzEv\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "validate  Tilte of the page \"Find a Flight: Mercury Tours:\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Step.user_Open_the_beowser()"
});
formatter.result({
  "duration": 3636311600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.guru99.com/V4/",
      "offset": 16
    }
  ],
  "location": "Step.user_enter_Url(String)"
});
formatter.result({
  "duration": 6391481900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr264380",
      "offset": 17
    },
    {
      "val": "qUrUzEv",
      "offset": 43
    }
  ],
  "location": "Step.enter_user_name_and_password(String,String)"
});
formatter.result({
  "duration": 304689900,
  "status": "passed"
});
formatter.match({
  "location": "Step.click_login_button()"
});
formatter.result({
  "duration": 775529400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Flight: Mercury Tours:",
      "offset": 29
    }
  ],
  "location": "Step.validate_Tilte_of_the_page(String)"
});
formatter.result({
  "duration": 11465200,
  "status": "passed"
});
formatter.match({
  "location": "Step.close_browser()"
});
formatter.result({
  "duration": 988372600,
  "status": "passed"
});
});