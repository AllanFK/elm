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
    accessToken: "Bearer CfDJ8O7nk6mTI69BiZ6LxhMiBflNujXhvjsinN51aSnYml912D7HJMcj9uAI7N2f9iXB1PJro4pd_EuS-yaKmIuBFW5hxWfSck49xR1DQUHZAzEpE95uju-cJJyKsjCcyj1yUdYWLTqcUNhnlG0dS2-JKGEc_HpdPkZhfWkMHWXL0E4U_ZEC7HCOFtkz9-K0pi2RW3q8DN7KBlOKhuXsA5WtCG-l-5-pdBkyzoIFF2Veb4QZj_ymoYSiBtqIisKEz0M-T20CXPbEmAJjQQT4kf0SySV9HSb9KpprxBbU3Cu3wi5BqgyJu3L2EBkH9YsRKhPyql46-HQSJu0_if_sl6mL0leeL31Y18XV0QUCp6vNzaZ2qNu75Wc3OnBEL4iGFDVhF0jQ89-FphzRBzqzD0MH_fmPFndmgowQI0AT3CmYUIlt7ZY1U4d8poQyPCkeG1YxXBS3lg_6TX8J8GKPVeT7jit91BE7N12uYgIt_uz9f3BPploq24rvat4SJSkqdAQQmw9uhGEsX6OTTtmVT8KNlNC5Vz9dJx_TRkSqiEoT5Q2iJYtPomiZ3zEZ6ROTkkpkTs7ftV-S0aMV4D7EO1wIxG_VuSaBO96j2-b8BvrSfj1PUtL0Wa3zjCWkikW37T-bWfbvSqjkhI1yaakfOz7SGH7yNWGZxKxk2FRBSdR39RD2yoM93vGkIGkzRqnjRvJhrEZ7enx8wGxzCY4bXP6o0B_XNNnMBEoODNFnebRw3fCxxPjW06AMkTu54yeSY4avUbRaj12hGwBLs_qks-pjqz2FofYM8djEwI7jhJXroQkexn3CVdhq_L_xDEJ-dTb-qTXktjSPN1oIfDRIJK04tcAk15rI6slCQgYOzsZyZb2o-p1KKLAcZNvdsO-zUwhpShbKY9zlErwWnF5RI_KwV3VHzL15SflmENRIjOGzir_r2oFzLXIobi4sMIkmVL458ntmhPTlsxAJTYMzQmhTfals-I28PkZWrZ6terGRT_VmnEm-g2TKugrGKbYX2okzlLJHiN9GeoUO6qj6SEghFb2FDsBdMWbTqPa9QEOHKiYk1O6NSDmKOW737JCCgJJztURkWOWjKap0DtW7WKwTQ-WDPQ8rEECqenxTfhL4_rPjYMji5CzAYJN7U8mSN_P0Ni2Brx0zqv84QzGVsDC61MJkYmapcq2agGVaD1StnUwCoz7Xq4nGXr4z5_2i2bTRCTX-41X9abdlluB-2N32wrO9-jxyeYWeiawoBDtpJyi3Kt5IQr9VYSHS0NRN7BG_rDCfX-UvYdTfVuX-TWeGuvMLTfN79GtDQ80b6dKb2r9_ZeRDGXVY2ipvGDP-4GsxbA5BWEV5uhmH6GfJslWKAZEsDw8oE5FGhh5JTq6xybUE8PdrgkRckN9EBNhynhlRmTq50nOHUCo6ltnf5Wq88HHDh5YI3zp5ZUCQuU5zs7CI0uTS3DxelnocUHd3YkOQVieFadGDtGznPBTKpfc5z9SrtTWnjWsyQCnUuwUhdkYWaayMtq_F79Sl3rjdoMG3Fa0XZngfCWLsGkljoVcvlcg",
    previewImageWidth: "600",
    language: "nb-NO"
});


app.ports.check.subscribe(function(word) {
    console.log(word[0]);
    // app.ports.suggestions.send(JSON.parse(word));
});

