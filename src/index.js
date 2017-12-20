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
    accessToken: "Bearer CfDJ8O7nk6mTI69BiZ6LxhMiBflCe7i42cdY3XUUrXlHGaW8EHBx7mmFDigZhw9FsKG1gW1pTrqCgSQaJ51V3EYOsd2i4CFRHMVRJtNBQof4Xr5oTKKb5NlAKvGjsTORCTzTLcpexQ0OOuB4x16VZ6OmHQu5RVvhH58qjGJ1SaHg0g_u4WD1Go5mNvopuTj3US6RK41urjBWb62fjl67y9-ZllemdSrLU1BL4s4pjGpw2zbTQias4ojwPzWrZyVJ7WKRcjwZgxiuXsVUrWCtQVTOsj1NDB2vIcu_iFKtyJUVujge5pdc_LAxzmVrIW2UXxTKZ2ZiI_03yfZCnEu-fBekPFcaiUTuwphX9gwi_fs2sc5kG6LwVxfULjNUZ8K3_-0txlACmmewXSxyYjlrVrNCkJL5etCUB-jO_kvK_rvkvPnTLinirIsZhCJrfEwArXpzNB_cdm775MLnvHnyEmiRVEW03zw7-8X6l4bQ0a1GHHEE3RHlHrxX48trpmg9g_uTzF2IWrl-AVUFCZqq65PAB6N94WaW2N_8hqcXExIhdWwT_tvF28a6HzrNx9rC2P0XYPbBh0YfbeNEUfeAgb4Y9VEFy8yUZHwgRGeMNLl6Lr9_ojuZnW5BJxcp6OXNPUaBnxRMr1PYhW2KQ6LZFjHwEPLeqGtOx3CpSkOyoVC5_h7cu9R2-PZVzyC7oiH4yRUSIzfKQCDeBqj4kbYl-yo_BV1EazRlrncBBKze30vaitjplvjqxxHQoIA4VdO-0uDP1dkihtLAtgqgPq4uQhUCRgzVv9V4A2njRj4BQWUATAzFPw6S7Cuo8jgmFzvJIPm-sRLP9_HLk5mgRBkJiEBmI5alrwc7wIj3n2ePRW9p0xn2Nsy6Cq1l9Tqa5iVgSkX6oR-zcemToZs4xuuEPDzYvzW0W8O4qd5aINcGdo-ylvFeE6taSRHrnPF1IG-kMZXUgL0HyCCaaGpIT7H-BN92yfMPHi9pgZ2_Mi1CTAo99Lon9eiLuCd_Jj5rl9fbsrujdD-PuMHIOMePVPWMXVHuSqIxoao8MccJG-l2pd8KqWLaGMzsdRsnxgi2gKxmGqpr8yxH21AIgV8XNz-2OcDnbsQrJFBHRNBxM1HZKaW48MaDyDGbtIpCI_hFr7jjw3-YNd6_ti7pObrBi0JVSRrjSLUEHpvmpf9Chz6mBHHcDYaN0QFNpv6lgwmQz1BqUcVh070u4bmMaHViwNuxtt6pWp1c3jNFQJuAiTVLLcwzV1B1NRdjltDDRUBjpqBkikwSQG313tE7210kyTfTyRydP64BwFaNwMakfFtKN1NQwdZDZHAAPyo_J9640tnuVEq-2-bbLXp_hbLTY0MyL1C3JQ_eDpNj76f1BUlUN3WHKximbddlyIUYQYt1zJoMjQtahRyjWFsXckgzS7-KWWEZcxZyajxYPnD-CGfMm8C5XN42X71edH4IZ1AQf14Br7ctzco9uF-CFe5ISZkf_wz06W851g0qGduGEEwpD-phqiOAUTAP45BXrPWV-nrgPNNnCvCpfQqARdmXtt4utA4mofc",
    previewImageWidth: "600",
    language: "nb-NO"
});


app.ports.check.subscribe(function(word) {
    console.log(word[0]);
    // app.ports.suggestions.send(JSON.parse(word));
});

