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
    accessToken: "Bearer CfDJ8O7nk6mTI69BiZ6LxhMiBflFkph_HgCg8qvP4m9I3HTx_3Wz0MqlppNZh08DIyE9TDSQ9PVQz3YPcTaVApeFejb2hWj3vn2VRsCAS7gNE9ciVc5skzy38BmlqhHV7xAwLmg7XIaryBs4VWVnfOEIVS5kbXimwTPA4GBFBME2KJ5_c__ntKZApsMz5Y7PwlMHjfgvh9O-VahkY0U1zHYIwbV6CKUn9r3sfUxp-WA16psCNKThvwKiDBDDZFoBroKWXok8l-6dsUjrT63kYMhUAYMi9hPnHcHrpH7IAz3lLPZnb6QcOKr9dcFbF-qdW36b5xosL4x7DoP_JCt0ZWSgoDRqkgUeSrcJcGwemLW2OYWOYb3xmbofcJQ6Ob44lwONSDvLlScEtFOe6IjM5HCZdyzDeEDEz0pJg0u9Wt4yOMD-yVb_jpNSCniaIZ3Iauplpmiud4-zxoLj_hBFtRqFX95OIO2BdWFK4zFpgOCc2in-BN6FxOWgcXqpeK_WKEBzuAFARKfhEXLetyTQCRkBbkkSoVj_U42I6VwHvKmZaxXPapjhfWPY9hMQx6dGUcMLdhg2MIq23OrV9xGnjBP-lstLtfDgJM-GSQh3nfTQpoHizxZrQmeqTMN32AFHh0JxJBBPWvHOFJ0N3MWw5PKefjlqFtbse_q_bPH1qDc4s_pO8MY_aTlwSz2JT7nI3F-gF5-5fZeZ4PG-IlH8SlVLOZrUNulLYSJWAwUeKq529C5n0Hx-qZBMZakVQuVotBrJb_OA-V3HZwq-28A1FsDTDxXztmyztEX68jxRyLCjcSVdpAD4p3tbO8qvAi7JjMkn4S6fjTylQKrS8jwQkZFHkSMlrhmJga68hn0sk0D9_t7DF10Chb-GPMHYbyu3TQ8GoOau4mGGa3-kFcL9ARbUtpi1BgSCQCirLl5OFMgeyR_MqXVLFemVa3azE1RnT-TB1HjztXY-NIOgpTj4lWdLljNLE7urMACJ1b94gNEsWBQMe3DgIWywhy_vUytIpZ0KEEAm3s7H_g-bE1aj4NZCCq0PEpCIbiT76qrh9XzXgK1haFoQZkAyVXGfXhiMYZGRzlHWMHErcgPk97_6TaJr2TdmQ2IBgyjHNiKXCfrIHBpVjX7Cb630hvh1DNSdvJLVrVZuzOo7k7MON4TxJ4BJQVW4MkR0F6uQX1V9ixLlKskahUmN6KD9pqX641jitVI2bkUFlZ_iTs-HSIgufLRQRsrbtpFd5lHyiDnvtfs6Ens9SztC3dMWy6OcIeIfYbcF95DCUK6hrVA4zzM4DCu5Jh21D5WW6pV-rj7hh-wEBRh9et9UPT3dCQ9SL7CjOROl8WH-hGn5v2Z_VP1ACIRU8iIGThjVP0kTTPMRqix2fvISe-yEMGweTcOtbCavfrDkjE1A84XRqllS0s1VYi6ZrhJDKhoTQOKBNE8hxVU2lPLjp3iNnOx5l1DXmMJaHQ5DT0S2B-_GufnIfAX75PQSzD_5ZbI3VK0IRjusx4VrdngeqgRep6CvTSbw2Nii0D9RCCyHezzqVoX2loBcnQ-Z4qg",
    previewImageWidth: "600",
    language: "nb-NO"
});


app.ports.check.subscribe(function(word) {
    alert(word[0]);
    app.ports.suggestions.send(JSON.parse(word));
});
