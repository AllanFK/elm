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
    accessToken: "Bearer CfDJ8O7nk6mTI69BiZ6LxhMiBfklTyAtxp2ftgUoVougT6nuVrPH2c2PXeeoaDYSX3WOio5_aFvnukVQkCr93HxFo3YnMg9Caj8ulV8WWi2FpK3m990n8AGP_YJda613dn7I4SF35bfCkm4YGzzskXbw1oOM2FwyFyR8xusUA3HtcDFabboJZ1v8TihNgWy4eEWiUWev1zJLDm1d3qq7WEbqO390iWj4NSdI8pffdgIqyVfK_SMwSTGO2774RY-ifYHggyPuPUq1sy9gsMSzSebI46ffqQJIv1bDUBp7ESnDG3RcfhSgfc6VbHdkaP1SNTYEsgMuDzYAnQOeJJp8dLCyhYiNGHcTr7iE1l-LcdX9kG6K0ZLoypqPe-Ro30GquNZ-SZBEBhCRMWhh0VyNm2gPH1kJtVzKdF86_iJPKDtuEFt-qYQcFQ9yP3qcfzQzkQHTEJaSi_7gSaifJIxiKdOBebizNu_DsoIL6JVXYvVHpqTxmjKx7ws2TclMx48bCrD92Gurp5PnP-dsDv6Lw-3bSa44w4jMGGFs6AAL_v83EateRZCVTxOmZ8MC7trMbVOVYGvc8szUtmTpCRksEAOXSF0cPam5gYkVGntrExIRfYySE3IjjPWw97RRbeymOesV27XSXNjSk0im6FnMNaiV3PnF5ZealgEfUTEjLYwWJ1oL_vLzEz0s3yqg3M1Zr4LPCbQJPfWWnX69SW2jetCmfwqqZVdOM6FCoTBbrG141cZGhP30Jw8tHnjwahY1ycA28KKQsNxJ1h1lVZXYmBcH9_oT2nwWW-BmP0Vn4Rk9YxwcEun4FHdSP4d6cVDIPe_YsueXrGfurFrHA06ylljl-m5ec6InuvqlegodYOSqOixC3EmW9c90bKiU5qzDlBiUJVEM2Q-ScdBGs-xl4vA6EQV54zBw03utuQYyP80cs4Or8_yV24vHLOiSoOwU6p9Enj-Pa9DIGoarmL_z5Gan2lEWKEcSXVbHqJzx4COKJtG_GeMTwSCSevy4hwPThgGL5zU4xxfLTmbI6pwONRj5oqD2JMbkZPByzjjQ7lz4bD0flYHRYkKoE9lsh5JnhLhmezCye-hhLCGwBB0EWn_eSyIfHI6Veblq7kxjE5KAoITVzb5TdYRTONqI7Vwr1yxAa5FT1iH4Mv87DePuuVTzulfDpg0vhHm9f7k09L-8AvSpaMHO009xjyJfthgkb8IobQPrvxjdLOAbpHOnljZLc46LP0rkinPV9QvyWoerflk7OEB9WchvQ51kbPDnvXep810FGFlfu9AxmFYGFmnmpVNzmALZlkL3QDtp31DeMsO9X1zh1dePpzzrdc8MxlsbGJV2nb3AK1OuzZnGmgY-5I1pAd8MW-YQR9YWCWq_HFq1_3wRFMLJ2K6x_ADNcDcR43ZHp5Dq1LODajcDkdUj-oUlf3U5Y9wi24sv4ynCpdMKoyAmeiY23Z4gXFsc2P4W1Q5GSGGm1OjihZa5lJniQ7d9dRBFVAuc9KL695JklX2Bi1f3TtR9QcEZwM0p8oDueRNNftXPhqDeAxiGpXHiHUs",
    previewImageWidth: "600",
    language: "nb-NO"
});


app.ports.check.subscribe(function(word) {
    console.log(word[0]);
    // app.ports.suggestions.send(JSON.parse(word));
});

