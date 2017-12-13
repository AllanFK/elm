'use strict';

require('ace-css/css/ace.css');
require('font-awesome/css/font-awesome.css');

// Require index.html so it gets copied to dist
require('./index.html');

var Elm = require('./Main.elm');
var mountNode = document.getElementById('main');

// .embed() can take an optional second argument. This would be an object describing the data we need to start a program, i.e. a userID or some token
var app = Elm.Main.embed(mountNode, {
    vendorId: "1215",
    channel: "minnebanken.no",
    page: "dashboard",
    template: "standard-portrait",
    accessToken: "Bearer CfDJ8O7nk6mTI69BiZ6LxhMiBflsGCFqAo-36Oj9ZzQjN2F22fTmkMLavOFHDvIB5gGjyVQVNcxmWrEUDVgbXSAa2F7jAeQ6XWNycUhMp6UkiK5dWT3aBQmCML9BBb983kMfR_dlN9i51T59yvnFZw44K9fBZi-cSfw-8U56OUQpTasbD47jJd5XFxARqWSYEtWl4h44VxoSzVpGoZTnVZO9qyi36yfKhXIROhh7dgCOvEb_UIjO1J8Ni5gWLT8FPPxmUS1cLYxrOCC1JlpRdpNxW6-dfIM71O1_RWRgpfj_i9j2cqBNAeK8yoxN3MJ_uSk3jpqo3b7CEMNMwO5iimQWlJL_Ilx3VgIU4m8EQQIwyJww14vwckD8_NlwmHj7954qNyiLQOxR8ozT7Vb7aY-xnsavce80caYjbhtw70kCEV5h6MbAzu7Y1LGkdG5LJelOOkzid_sIpiDJdGxm_Bb96eMqyDrT7wbV-phlCNnz0WX-w6jPc03hHnNjaXsiJVZ-VRVf_bxh92htZvGfTi5zEBblyZH80AuWjRGg1Sbabw4KU_q9PbfUL50mDSmU7vS8jewL-wm1N3jeyp8MuVY0AwoewKUKjyeTFC0CTHQKMO6cB54UTLj0eDPjIWbPThpFefzCqMfOxa9G5JNLU86war28uxNpxZQO-R5LfBdDuKG89ro6L4yqPSI25P3A2ookBgatUPruu25s4mOqQBHgjR7Tx2buRUnBhTzjJLHHWS58s1tbqOv6yOL61xY5u47ln1JZqk3trR5t5FGnAL4g147Nl-QInHDw1WxNBDEe-Jcu1YZ0Hy2WvTIWAGvWWy-1uvI55i-yn628JxLpwMzUrswyyh18rgHnY7fcpYEey0ecCXtP3oKFDkMSKFGIbNW_PPHUhb39oj9DjOE0XlEo8LSsi-PmAjCohGuHSI9Wo9Vzu9ZrF9xk4qGzlPbwxPjx6L7BLO-VmR4WhIwO5M5ayegapKoiWG_HQAU3O2zQYd11GRFKYMVrJYZam-Ccofk5jIHV4IKv6QeaKW8XqiTBNziq9CeuyD4AP8DgLNqQ7bJnJK9OFiGIMyAqN1x3-Nx-DHldnmprMjeo61qc-_RZCzYKAgIWNR4cymruySAQn6n5mATMvFK1FFaLEYUon91GpT2Fornqwcp7RGoMfB-Yyxf9YmYgmI_o9-G9bsqemdEbgGzCIYAXm6B6Sz_hcWBQx9z7LxQwPyNjsQWJnozeyR4UyoDLFkvJgCv7TvzNgxs0xb8o1AdAO2FM5VZdbpPqTWizdHfXIq1D9HB9rOX7LgHPhIPrDWVK1siBHqCmDsebC3iZqWo6y38280Jx45Gt9IB5cVvRwRn_aZe7AmnSFeEwIta712hsANZYUXz4Ot2aIbkbbmzeKezRogIc4JTILH9bZleBYk1HHamz0Ysay0aVJXheCMxVWPebsATaRSVDgw-uGcscmBAAuqHnvRSGU_HrJumUZ1-8L3nxFV_XLO8",
    previewImageWidth: "600",
    language: "nb-NO"
});


// app.ports.check.subscribe(function(word) {
//     alert(word);
//     app.ports.suggestions.send(["yo elm!", "nice"]);
// });
