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
    accessToken: "Bearer CfDJ8O7nk6mTI69BiZ6LxhMiBfkmzb1PtCdHQCQXLLXan4c6ZkiOd7lVw8KSG8qbfoRj-7kETPwXd1TTMG1MVLP-PiCFpP7HuQdO7o7Myn8CXZJUAKCvH9B_Ho2lxzMD2pMQsN7afdx5B1uiarSMixUyyA1nfzIYPYLNor2ZKEvdesVmybael_nj_NffotFIUOwrYAd-E0Fr34e4JFuOGyAZJKl6RXvhvALvJTF2zYcHOo7ll0eSOe_DJOsk2KBtqYWK8lGr4BaoWszzvhn62bpS56hubSyMSu2AjVRrCBno0wYGQe5WmPfJfmdn04LO88VCRFPCZXa0gv21mf7ScY4UGLk0aoOAEEpWM9zkvyRCL_Jl79Mlh69bDk9tohT6nBHo2xY8f2w0JKsRsXEx8DfiGDhWDNNr86r09HlKs194izD5jyj9MujVnsWibweZsWVR3cSKAGs-XQiu6SY21bQ2XonCwnc2RdKc994MmEv2zQnU_6WJdUiqA3BAV8x8ZgFrrnJq37pYyFhh-PuVi8eadr9uq87BDIQQ8yFtp5JFXkgUXYFmTZ6d87yyv1dD9H7p1s92LPBP6bB-oq4VBVoCu6Bus2y4NIn5SAElsDI3p40pSIhq-9sR5JbWHUqoD_D3Pu7Ebv4Rbamib0-3T9zeIFx61izucxMS_kHlMVmcWlNd14SWGHZX2L2GdhlEtZN_b5j_J3Y2SCxi_jgfYsj-g6cD-XoU4OkxRljvVdJ1npbn2ENr4W3O4msRnitQjGlovPooKg8NryPtNingjHYSur9dhLJWUAviS-B_v1BfIYu8yB5Ke2c_xYBPijZX9AIuX8EkJDZ19y07mtbVDx4Zi5yV8WDCl5q53_qQ6cUK5A7vIuBLw7GKZcg6x8glSFZfG5Yl5VLiW00LrW7caGzq1melksBComHKjCEeydOEsWTEbB49hsf_aVxNZPgncFHLi4Te4vWnCoOZYp2l0J19PpiVcW_Gd0c0WQygXgHg_9mUaORumKW6biJ28HaYX2Dd3_0wlVRX-bDjzSw8IJ-z2pb_FsmoiYHs6TaqxJDj4LESu3fMwVungykT0HNBsfhiuHtQGKbEKGakGrdy2gChHUz2DWt-UcnKSBvXrAwjWAOvYJGcsFn81SS7xeBbl1yGTdSkdhmogt_Zw_UJrapsawwglKhtJWOqJrKAHzNgVWOARowrPe7W3l2N0ArCjuoJ0bmwn9rjUmKrNYJNLB-OuDHnkqpT5EvFlAONgzJH6eMB9RQCzcfRYxtx-amTXTOdVqft_pMVD69jb-ryrRvtbfD-FvpMTpyXS-_EAJJpjrdmd3VILigJ1vItZuKJ7pXZ9yMP7xff0vzPZtuh-agJu4Ued20G3Li5iV2ne4QOHxNCaPEZdwGEWJN2NOLdiKsFd-Ubn3Nx1BBgaScj8esjVmU58J4SIREaT0JXOj0mV-HMXZi2hiewJedxQiKdb33spyKpSAkqi_dSO7cHt2DA47rxi7PyFRIQDp6lR5QN2ReNNSws-X6RfEtGAeEGt11dQwjkhqyPnhDlXtJSa8a8u8c",
    previewImageWidth: "600",
    language: "nb-NO"
});


app.ports.check.subscribe(function(word) {
    console.log(word[0]);
    // app.ports.suggestions.send(JSON.parse(word));
});

