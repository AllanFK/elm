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
    accessToken: "Bearer CfDJ8O7nk6mTI69BiZ6LxhMiBfklQxeutWOdB43Pr8TpoU-jjQdc7XxIkwCmFdNJXSlqNz33O4XreFczHoUsIFINPlaw7hwFtYXmBpJe-gnQyHZPHvKChsrCoZcsjIO8ALAgWg-bWN9jWdaSmDBHZCBCtBJ85WXAXozg1lehHhvgl_UfRWSZG_4HNwXMhBgsPPcR8TxWMzP4uv3cDJYMFcTKDS6Crz8Qq__juaJTnkq1d6s9Q1XpfvMAFBzW9X4SRenXBMtUdELv1630ULtNpAGLif76F3t43Po2ZHpWY56t5-ax8DdWOFBXPC--vEcPtM0JDvnynUUc0L296XIKHBdFaEolWGPldKoYF0rKg0dIAr729a42WWRsRzA9PSaxFEF-N0CKrHCXdKxe38fO8a1i3fEu6lnNspxypl4EyA_yWQTER0ICAxcjlLxT41s5DXeABavQyM8zwLkdI_2-i8xbwmWx15RLQ6z8NMdfZrIl3UwuJkSasbtzcoKljVsAH8lPo4M5YMBSlMtJKIgD16U9v_5M-xviHVPyNEaw9bP4svI8tXNcWfb3KqOqqq2e65OqLADX43mqqhqDVaS3Fs0Sco3u8YuKSFXtmGWIVkde7RxxGBLqvbvCw9W1jGHXXA7mEuv2A6lCmuyu-PSESYjUNxvW0Ml8k5XktmOWDBWOeBX--pQ7RmEw0Nckk3RcJue39-ZC4O51KrR-M7he5Jf25__0K1Gr5uK0BCV9wVUKDLya_ZoCs6TA8WnIfSpVYZ-zYkkQHeh6bjyxpcBR66PamRp3Bwkmr26opRuIFt4W1_4N-MDjanC8GiXZ3-pG3avmvjL5nlYZo87G5ZyB7FI7YA2US_n6EWpRzUO0j0fhU7UnyHDnpSYTNGJtT9QliEXIkczVercx3WQCXUV-La52EsmCLHYIfYBBveOgXq6lhEWEC5VCHP6-Cl-nn8bxtPpjOIpcTvsN6BYuYjAm-ZS6b_rf7cqSiZ_RLPuq8BbUTbdodlKrxYZl9AX8eZquHY0FRgDqXzXawbakZ_y_rP3dyNHvicDAvmU-Dgprb4e3TrYzeoqf0C17pOPQ-kagQubVtMg-pMAAr4BrCINA_LYWXZ_nNX3LrblDBuayI3tTiCa3MfWF1Cyzq42EKtkqT_JXCxWduT4NukwBHJviC5mu0L4vSEt4HPTolzjPYNzIw1PZXDLrbFIgT5WTeOqa4SC4l-1B9oICxAJcLQGay2mdLLvoT_G0zu6aPArzaT3N5nnvDL-nIHV3buSZxkCSqTiY73U-yOq89bZuVtyOTdxi3jwIigxMjcwB8dQftC87ixAyHLlwfi672M7z6--dMFedEbW508v0jwKxfaocLgrD7tZq-A5CQ6iCyQsX6glaLyoXqkcJI-ghCrzDdqhV9ZbVU7t1hOAD7HfnjDSfJRG6cAFPev0GWF3LvA3_z6WLCdqOSNc3JVC2a-W-ZLuckRDDaWsTQaqANr820pmnkc6d5OiColR5sDYZBipHiJL1SOWgHMXDxaIC0rAQD-1Aom3pdInszz_dtg7W-5lFbmcPTYE",
    previewImageWidth: "600",
    language: "nb-NO"
});


app.ports.check.subscribe(function(word) {
    console.log(word[0]);
    // app.ports.suggestions.send(JSON.parse(word));
});
