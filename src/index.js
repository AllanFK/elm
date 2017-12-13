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
    accessToken: "Bearer CfDJ8O7nk6mTI69BiZ6LxhMiBfn2hB7C0QGu9YNuOlVU0mqa7vxs3RpRkEtqWHGfzvQOrAryAwhtSNfZVIMzafSBvvJibppCK0zO8ajUrfQj2WntJOVPJgbK7jzisyzxrRwDKwUXwIzLs4w7x16HsW1MjwfTSzSJ2clIu6T1m-iy8TCEi1zLNXL78WN27_gV1ezrOp1Gxqbo4S_2IM-zv9H-NGt6SuKIOZZRSZkNRAFK8xV-hzmD8X2NFwwqixVQ-9vnHIzeEzAoUw8PkJrmnkPi8KDd8fr2PZDcv38prNFeoKtwtBMz4hfbaslVsDMp0-FSZRSA2iwt3WXFofu7UXrioxaX76u1Zo79-HljJ-wrbe36O9rWN6SVbOZlPfhY5WH6Kw0AggGgS6QV3WIfPEO9oHyNpev33rbSdoFtzkQm4dYrrGs31aBs1zS02xmI4KFRL_dr_4Qv0lXPpDpSHozYcu3xT35Tz6tNpvwyWNDREl_hDHSjyDGNeBvyVrRxvrOCF_8ebLOaqKPuEpFJu-DgUrCodh0LgP2pV7gOn1AWa17ghQ88eSmCDdlwQclDnQ6rBNMFuJpRU36fcMotCDqpcb2zm1EOXF1jPjV-I1cydX4baGhs5lsArwt_Wd0cbyn2sNrpRjSxkw8k0XxpTxdKwe4aG7BL68Xomv6sYAhFml2-oF4T_cQ3DGdldONWhg3L7sx08ShH9sQ6OcT6y-l0rSXQ4S63BUa8pKPGrtd6nhGxyd1OJkrQHhwQAuBGZ1tDNw7-P_rRmm51SLmzglw88jMnsDUm2ftQQHDxAcOjnGlFdmakBaI4fUDMuEHddzis0gjKCmhFrOArpAURLs-yiPhBB4NG3O4UDAMuQMFZhfHpdinz7KxfbiZggL_QVyTdE0fx3nmE2pNIDLZ63642pkZOFM9KbUr1sslT0zBAXa5mlaeUPFUznJnNX-ZxFOj0jssQGXoCM2nYff0dZBLEc-77U_HxS2kX-X8XmAk2CBE3pRhhNnTWhs7pNwFj8fKysmDtaLex44P4iFfOy2cvTBlwTPntpTML-0gpILSY_7k1Jl2pRf7YsjQTCPHCTTMt6PgH-WgdzkbmPqmpWuE3DZD2jzAKpfjSnrkICA4eQ_bljxFfxR5ZzRBU3E6qoZKQcHUy6oct2FqX8mjhfbvpzdeuFGWGcCbQDD7aQZIDgVLlsyUEEOAFAWAx-vLcWDeciz-BNrh6QUWHFyGiwgQ44OEwhKU3Xex8Uoq2wwrp8yYArj9cnc-nnU4eTjZhiMMa7xR0uWxewj9JDoj_0qPcqcFVkCg1vV-1xUDzJDvKCSRItc_4yQymP7WldJm7pWiEckyOXu1k6eOgEccjISdDD_TN6LNzx6-rKlSeynRW1eacB1QAdVFCrzvyze0OqB-FcMK_RZaOawzvNGymsCOf4S80c0ZWIkvMCAZ36M-kAp1ponKHFJSBbTSk8gyWbbpwf6lgITxZFmKETFmD6K7RmsIxNTXuimrEV_89hswkt4qjjZRS6-1X-iPBb6tPQU7XGsaQzfk_dCVXTE5iV0qchCs",
    previewImageWidth: "600",
    language: "nb-NO"
});


// app.ports.check.subscribe(function(word) {
//     alert(word);
//     app.ports.suggestions.send(["yo elm!", "nice"]);
// });
