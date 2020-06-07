$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Feature/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4691578900,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User credential successfull",
  "description": "",
  "id": "login;user-credential-successfull",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User Open the beowser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter Url \"http://demo.guru99.com/V4/\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enter user name \"mngr264380\" and password \"qUrUzEv\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "validate  Tilte of the page \"Guru99 Bank Manager HomePage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Step.user_Open_the_beowser()"
});
formatter.result({
  "duration": 169097600,
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
  "duration": 7161970800,
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
  "duration": 268872100,
  "status": "passed"
});
formatter.match({
  "location": "Step.click_login_button()"
});
formatter.result({
  "duration": 689587100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guru99 Bank Manager HomePage",
      "offset": 29
    }
  ],
  "location": "Step.validate_Tilte_of_the_page(String)"
});
formatter.result({
  "duration": 51377200,
  "status": "passed"
});
formatter.match({
  "location": "Step.close_browser()"
});
formatter.result({
  "duration": 787797300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Login datdriven",
  "description": "",
  "id": "login;login-datdriven",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User Open the beowser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user enter Url \"http://demo.guru99.com/V4/\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "enter user name \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "validate  Tilte of the page \"Guru99 Bank Manager HomePage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "login;login-datdriven;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 21,
      "id": "login;login-datdriven;;1"
    },
    {
      "cells": [
        "mngr264380",
        "qUrUzEv"
      ],
      "line": 22,
      "id": "login;login-datdriven;;2"
    },
    {
      "cells": [
        "mngr264380",
        "qUrUzEv"
      ],
      "line": 23,
      "id": "login;login-datdriven;;3"
    },
    {
      "cells": [
        "mngr264380",
        "qUrUzEv"
      ],
      "line": 24,
      "id": "login;login-datdriven;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3379993800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Login datdriven",
  "description": "",
  "id": "login;login-datdriven;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User Open the beowser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user enter Url \"http://demo.guru99.com/V4/\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "enter user name \"mngr264380\" and password \"qUrUzEv\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "validate  Tilte of the page \"Guru99 Bank Manager HomePage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Step.user_Open_the_beowser()"
});
formatter.result({
  "duration": 3016000,
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
  "duration": 13229438500,
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
  "duration": 1173749100,
  "status": "passed"
});
formatter.match({
  "location": "Step.click_login_button()"
});
formatter.result({
  "duration": 932486000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guru99 Bank Manager HomePage",
      "offset": 29
    }
  ],
  "location": "Step.validate_Tilte_of_the_page(String)"
});
formatter.result({
  "duration": 40721900,
  "status": "passed"
});
formatter.match({
  "location": "Step.close_browser()"
});
formatter.result({
  "duration": 1044338300,
  "status": "passed"
});
formatter.before({
  "duration": 3359233800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Login datdriven",
  "description": "",
  "id": "login;login-datdriven;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User Open the beowser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user enter Url \"http://demo.guru99.com/V4/\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "enter user name \"mngr264380\" and password \"qUrUzEv\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "validate  Tilte of the page \"Guru99 Bank Manager HomePage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Step.user_Open_the_beowser()"
});
formatter.result({
  "duration": 4006200,
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
  "duration": 1623717400,
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
  "duration": 2895216200,
  "status": "passed"
});
formatter.match({
  "location": "Step.click_login_button()"
});
formatter.result({
  "duration": 708316400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guru99 Bank Manager HomePage",
      "offset": 29
    }
  ],
  "location": "Step.validate_Tilte_of_the_page(String)"
});
formatter.result({
  "duration": 5479400,
  "status": "passed"
});
formatter.match({
  "location": "Step.close_browser()"
});
formatter.result({
  "duration": 729507000,
  "status": "passed"
});
formatter.before({
  "duration": 3346148300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login datdriven",
  "description": "",
  "id": "login;login-datdriven;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User Open the beowser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user enter Url \"http://demo.guru99.com/V4/\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "enter user name \"mngr264380\" and password \"qUrUzEv\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "validate  Tilte of the page \"Guru99 Bank Manager HomePage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Step.user_Open_the_beowser()"
});
formatter.result({
  "duration": 5307300,
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
  "duration": 2353779600,
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
  "duration": 1277007600,
  "status": "passed"
});
formatter.match({
  "location": "Step.click_login_button()"
});
formatter.result({
  "duration": 3057780700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guru99 Bank Manager HomePage",
      "offset": 29
    }
  ],
  "location": "Step.validate_Tilte_of_the_page(String)"
});
formatter.result({
  "duration": 48693800,
  "status": "passed"
});
formatter.match({
  "location": "Step.close_browser()"
});
formatter.result({
  "duration": 1149373400,
  "status": "passed"
});
});