'use strict';

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
    accessToken: "Bearer CfDJ8O7nk6mTI69BiZ6LxhMiBflcift5-3lW_xkzZAfkoQWcXF0PvFLrpun7C0muXPWjsk4wWafxoa5BOsIz50zqW99ehTUjRCjxOtgNKXoNEksEoQmhsD_azVU80V5hzNAHzXwE29PpANeobspvazia1YssqWF1VW1-1ny4pzFdJAD3Y7862hIfvx8RrGhTNzw3Hyueda07z6Kke_SBNemyCRgRdk1h-EPfX4S78gewSG9lBNYgMFXqTmRZg46pN_iqjc3eDuup_fQ5-1-CTScD7PiSzntsjilxnuhdlC8D_WnJ7KT8vHvmONRiZqmdUZ_OCAW3UXLoXmLlavTFhEDhSkLxMO51TLcrSWOG3mqCXt1KQAGPgInKlwCEeB4vU0sZCw3m7_nZKSPUS0fGXH5PiPbjMEPoq__leGoStrCdU35ROiaoq_VMC3zJ9yQtSO_Qw5vBLeOrhlMxqQ_UxBq63n-zaxgCEY3Meb2lSFnwuTMbBwX_nod0TDk-9N35lmZ9KXFrw1EXWdNFWRIJlz4CqrGUSUhit8DJlzZz4ZmH1morx9fgwT4ns3lHBbLASKjbf_cyqb5FtDtTQ3cTNrQQvQppWtt4YKbjfBtpMeYtLs8Bj17OS-WNpUPuhP8hrxJXtGd45uk3D63CAoBFhmCpq6AtJJEhvW8ur6pVAyFC7SoPuy0f4zJxAdOMUYX8u0kV1ODwVaYsEt9t2M-F5TVson4bMK8TBQKEAAqne32DWcVxHUscMRwA5rTDZMizlpvu7gGQ_PZujS3Gxgdf4-4zIRqg_DFjTZJe3VzMJrOT2TielyTs5bxetkU6ecstGRQ-IPbJKcW_KZ4_89IZZVbdIOu83oPriAyFeMHd1MHiEMKxs50zKWQCOgr2r9s6Cr7tHAM3BczLr-wgqL75x1YLeWXgqSSjlBT61KSw_5s9yytI4Ce4IYPKhCSN1FWYp32COkMs51swRDtAi1JycT_SKB99ZQXnysqmhmZ2EpWl4diuzNW47pnmwMdvWgpZxLHuavsjrHj9icWvyYM-NhK7zdwdQtny3xHRCBql4ujsX4iO5XwjHcUDBSxcj7caHeKUntikgK7LAzZyQPpgzi79YV6Thg3S5SneTwfXM6N8qnoxE6r3b-xa7yfzWBszYJ2dZDhE7Uan48QaSfLSFLKn71JnH7Lj2rlFW7NC8Z8PFFhd6goPF9E8caDk7Me0VWPCXQcgvY6hsTVIoOD8crjsqAIdMt_UQQ0409hvgcrRL7l_b1abtvVcJ3XGOcAP5QPdNBmJYUEaJq1ogQmnJv1k5v_te356mwMWDK9uLZkOEwLJCu3SMGIyzk4hZrN-5iMdgZdMkueFheDiYn6FLJChZvw5_H8kh9kUJ2bEe6OXxoW7NXehpf2m0qfmNPS6kMvJGga5_YnWb4b67vfdbXBtPrnuyFqjuAfsD01L0UQ5Qb4h6GuyatG3le3uoPv1SvmBu-tseHNpT-94H9j5U7aLLrAk3QooznLCwORFRY7ecSWsxv6bi2f2W1UYXnX6ORcUN4siQWrx25ryJPzm-JWOCPI",
    previewImageWidth: "600",
    language: "nb-NO"
});


app.ports.check.subscribe(function(word) {
    console.log(word[0]);
    // app.ports.suggestions.send(JSON.parse(word));
});
