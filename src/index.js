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
    accessToken: "Bearer CfDJ8O7nk6mTI69BiZ6LxhMiBfkP4NfH1AZEOaPI92PdZ4pv3hcFoU6Kz7bIJ8b2OJcDm4-6TW3D8s4ChxIM024kyWkWtKWeUDW76E3jgWeWsX2pfTBpjJIylYwPa60chbx33FAjAydbh-cudhoHzUkWtNvHgDHCGpWf6y-nCgv1IcXXNH5-qPtnYl2yO8QjlhC7szvVYIvTM0jmO3DAMg3Q9UKVQ7gwSrRxS4xHPVLRsDaeJ9LkwhSqBd1HiOpUjPO2xJDli1Xr0kxxFkKOW6nVsdwKrv-buyZlHNvHFCbpOF788yUE0jB0EVtyNRby3iY3iHeNtTsxPKFNxiewZ01zJi0KTbJDjaI50DfUu4vd6Lc8U9ulPsLC0IF8RJlKzXfztLrL6Zjd6DbeS7iuhd52WvZ4UsGDE6MqtmiHuWICBGrcK5qs-B8W5s1F2lcuVHx8Qr25rA84rj1Q-JYT4WBNgE46kut_U7XHPFjUiXaTOolgt6OV2CDBa_2aEaT196iOpjssYNL8YawobG2eusqsQ93cI5B9j5MkX9_y3OdlD2YwEcu4mZ-1rv6-8JFLB9Ly7djILi3cBKOUqsTSw3LCYwzImFIdAjjuOaGf4IUvIts2Jrfbnes8yK6A3DWKqoLpx85iiTGnQ_P_aHHfwSGPTL7MDU2d79mnuUDDJP7Yw9VsmhBESPfLS6W1iuwpQCzt_IQ4LBUtp249UmN6juMxpYuK2f4Cf1IDPvpeDqRI1fOsdB-y7CsWQU-seyJHSjJKQFzz3tr31uysG0cp8z5fbPgTP5E71TJVknL1FK0msMkiAdCvj3tHnwJ4IuA0Z9SKmifYqCX7xMhflv7WvTbxXN4mKK16_dybh59WdiJMAjJTkOwA_lZGXctnhA5b-hEcASQ08PoFkUVXjDQcmRbWbejUAN1M7BWVr-fmKGZ6Kpf5two6ejEiUzW886Kcc3g1NgeYqyAr6KYNj9h8grEOurvAcXg5HjKrRDdJvmTHinX7cfi1zNYjv1WmUEj1AbYKE4HtCofjOR2twUiADetM2Zgx6rsiSjXEfq6IRhVWUfBHTG0i1apbHX8AA7KaDhk6fIgIfYMMghpaRValBNNa54uiehKPOKXwZMGQT2G-KXTp0d2L-Uf6YMbIzfVl2SWXO1vuWL7JQyPxbK1AWwddjKdFqTCW5uno5z78fdPxle76SkPLz7wWx46lQyTySnOLxRbvn8mIrvDoA4FKZl0Sgy_IkMzt5nBUHDhFuB0ACSE9bLaRG6l8vBmoUoQ7Z_z1nEXBqRZ8hgYTPR0ble3KZkbS-3ulAq0Rf3hywN-JK9qUATvcjlzol_jlf-2al_PFs7JnS9f2p1N7Xw7kBStTrJjq20LTUMUmceh1v7Ol2ixrUt5efRsazfcOMRycuj4TXY_YKBRHNamsT6Iw3D2DOKrldJpFp8d660tpQxOJTTWi-5Nfgb_5RnxKNL621-rWtmEKDza_qLH7XA8AUzU2qb_W5BzkQbeIvOhrLsTNXCW4Byw0JiSHCkKuo9gcKiouJ2KNt5E0wEfAY1wNsWl8Mms",
    previewImageWidth: "600",
    language: "nb-NO"
});


app.ports.check.subscribe(function(word) {
    console.log(word[0]);
    // app.ports.suggestions.send(JSON.parse(word));
});

