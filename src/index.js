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
    accessToken: "Bearer CfDJ8O7nk6mTI69BiZ6LxhMiBfkTEEF2Sh2I8R4JxA339CNdlmIblp_uCkkM3SGz86CpcRCbTRHiXTixDk9qWrCbTIjs_9IwIlvugL1hT5aaveR3TUczptBfXivtOptU03jK4o6tjucAuCWJUsMshwlejhCmAo_QGNlPjTAXPuJLEYEjb93xzfHQfhfe4cSCB439G41hRlITEobxvJQ13NCiBbh290-piJkJKw08tUQQP2t7xDtYsB1Qnxy6ZZGVFYfmw6zYZ-hPIA-7MULZGeXueuu_EIstIr_q4sfyUlJ7q5a_DMWCjpB7-KI9gQ4LpbRNxcG7PUn-oa-lpHKJ2jVkUToDPYT6VdjxGAxPcA94Zsdi_X-IlrDhbit_aZUyJ4cb6m2lygR7GlsfjBAzcFwIjJN24ZeEiakwEyfoLjnPLyO4Sf-5MG4gHYMsGapkBZIq908nZOhJb9E2joJMeNa7qkqqxX8aWQ9sWpEMSeNLl8kyKvmXmDYOWFtJDr2_YA4mPpoPtLlOwhUz2SkW769DrrFSBuSNsAIbBVrKDGF7mRg94hDpdHahL3Nk1PoQO1KFMUTe6Q-udGuWj0GnOfkS-wYNI2vaouVGzEoWmhG4FKUZOBIbC-U-5bEpLoj-gyT740Y5nH87gmUzZErQN_Fd8DGsxQuydGxuZ6j4iZwRCgO-u1IR0dEWtsLcBDUoaVlSDc3BoQg_yqurRt0RLDrdYglrWEzCmGv8Nx1fr9j3vIWwAna7iiwla0iVY7Yx5WtUsrirDBMKzSUbCWVyyCVdjkFsVfWX5nIso_-K8CiUX4umtfqqMdk9vU8iwlISlAbnf_yA7eZoCODzPRxrkmV_JHCWkThvJFIC6MlxKIQLXTwnftRMvvAqtPktcBOqJjmdQA7xVOEGVMlQR5-nM3rl0zwchEyqxhXB2WVZQ-zCCjLdRD3BLiRy9LBh9cmJYGTjhWQo8iXqwYw52szeQWEhcFDRDqDmwilfogOaURyVu5lD8fvOwb50C1Vt-JQoZI5MFIHncI6UUnn9zhVfog-d9Uzlp15yHPPyvutt5ljyr2tPm-6dejz73SocLjuRZjCrCF9XEoM87odHbGuhjcOZem5GC4Ff3vUbmIPgXhxxTeqyJO6jUjiRd58Y8yiRWsZMbpFVaK0CMqMm1kaNNra6dos0QI6Ypl3Fl3qc9zyGTfNNa2pN54k6kGEFPIARpMJaDZbJE5-3fy7nLeW0JK7DXHccXmrQs1PDaLtWKMxNpzFqEKLlbDZU_IlUUFfW3HfTvKRjdDSC8Aq6GaF4aZNnmIlun-oVaFnKFXAwbb5ofesGCITD-p_7p2tpjcFvdCFh-J-8eX9QYF-uq_6Y--1TkkWWYpiv6wF31dWLyw7RND9swJ1AdAr2RZJb9xsO_fP9cAzqsAg3kSIAZdPKJQuAJk6avHRpJz4g33-XKGNOi86JhHgBGJOdEDTaDV36D_lsO501fST3ELv5OW3Hm4KnMP8u-zZbIR3ohw0S41swpMgHCz5vV5oEe0XdRtSPbVwT0T_M4UFPlCv9aVJJ9Whp1-c",
    previewImageWidth: "600",
    language: "nb-NO"
});


app.ports.check.subscribe(function(word) {
    console.log(word[0]);
    // app.ports.suggestions.send(JSON.parse(word));
});

