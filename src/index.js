'use strict';

// Require index.html so it gets copied to dist
require('./index.html');

// require('./src/Css/Standard.css')

var Elm = require('./Main.elm');
var mountNode = document.getElementById('main');

// .embed() can take an optional second argument. This would be an object describing the data we need to start a program, i.e. a userID or some token
var app = Elm.Main.embed(mountNode, {
    vendorId: "1215",
    channel: "minnebanken.no",
    page: "dashboard",
    template: "standard-portrait",
    accessToken: "Bearer CfDJ8O7nk6mTI69BiZ6LxhMiBfnZf2gP4LHc_ujORzk6ZmtlkplZCisYWdSDjw9rsvx-ZfErxpViOTL4zQtsaQymjtQDc61XHXuClp3P0LwsVgNU8U3QYr1tKu6EFnMpXDsKOLJs2OCoT-Ja9P2Mtl3pH1332CKsD28EI6gs6Y39yKcOyp-NCRDMec-9QJ-hx506F5B7yxoDoWo3Cyt-wCAw9r9i-am3aI-rMEyRLLNBGBo3RDXFIPDRGlJFxhfVARWgZmFl7DyvOtYSwwv43OMErILYLvAVDy7vwue5C8zc-Pd-VUiKUmTSZkhahWSqzr4f3wpC-OId_XaMJiHp0qBeQdwHCBVnOdWneV3DtsLCu--3jtZSvf7Eh_sOSYfSepXZ4Xlqwt2Wzj1KpRW4p5q6GlFCAPBlVq_uVUGNbWbQmYdspCK6p2trYXsub0bkpvBldtdUu-tmo1Wn5eiI1_nT8qfmVV12TJSugthOQFMNu1zlJj7AIpeTtVIAiBbiaCEn1a-5hZfr3JjG7L0bWjl6LuSLkBaWTqhb6DKyxn3VGpLAfLPYtV5kb57UpE2P6xMktCsS6MrE3nBjBOLb9Otpwu1cHaET_eDdt7lOhVaof4y13U7dzBtcxx5MDzhmc_Pd_BahbwkoQEs8cduOhNf1-ZLrl4aS008VhBbZ4NuOIDnYCSonUyGtMtrc3LVMXvOWEp2_ZxpRODDgnW0y8IQOw4sXdJtKKWeQDVVp1cVu9BDNGfXS8Fwv93ozm7q8RjDiZEKmatuE0y3AWTk9Y7Rc_5ym5He5ZInM_uqGQWeXdvwFNcRTblgo5cHTVSVKnJ7Bhat0hJo2g8-ZmWBIj1eHrh7cltppOQbnlYmYXvWw4sg-ReDNbld44aAeXR6OlyhvVeZOfntNr0wf8B-Ur2Xh6XY26we3de1DsK24QuKkR_7mz6JopTFEUAz6cnUFyp9IcVRpLopwMt5xhB_s_uj0-BKWY1J5-q-ttaYg-qaNKYKc_xVJ80JNWrQjePFGnBXgiqBmlzZHntOpBRY1IMjJftAnE-mChhO-CXu7OwuFRG9ad-q8XFxt55N5VMAIjjbxRbc4biwLh-N1iCkO_GVyso_G0cMjOnldEPaY0gfReB_bEOyA5mTQq3WUp1pB4_nlzCfCvUijVjSNHQJIzgKZrVwU8TljEIQIIKbKvxbN22-TeTRr7HjCx__QGs6OlEVRpi5Acqk0QzpGhkPf4gEkn4BmBJ9Wt3IEqd1YibLZPYjGbNEYe-1e2md9kH-e1sn_dGCDyv4nucjyeuNQ8ZJhNgRUMGoWYYsr6mZ89FkyqB7xLHCnFM5AIhU-NShst3ywSjICd1QPsZQ0ZxFAfiUpdlRMgpw_to2Fp5nMCJlyfFctlHuUrj0gOugmrud1HNMyxheGJJVRBOWnXBFk9dbWMEwpNXodLKLKgfIhaj-lvrAvJ4v8tRO6NG-hYrA01nBOzivlqB_1tYF_dNznVDjn6jroyUgZZ94Iutpjbuda2ibgi7wp7-EJM1PWiY6lYe2o2Tv_c6SpzdYV11f59ntGx_c",
    previewImageWidth: "600",
    language: "nb-NO"
});


app.ports.check.subscribe(function(word) {
    console.log(word[0]);
    // app.ports.suggestions.send(JSON.parse(word));
});

