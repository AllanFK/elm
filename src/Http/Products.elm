module Http.Products exposing (..)


import Http exposing (..)
import Model exposing (..)
import Http.Decoders exposing (..)
import Http.Encoders exposing (..)





-- REQUESTS


productUrl : String
productUrl = "https://96eg5oo6fb.execute-api.eu-west-1.amazonaws.com/Prod/api/v1/GetProducts"





sendProductsRequest : Flags -> Cmd Msg
sendProductsRequest flags =
    Http.send Model.Response (requestProducts flags)
  





requestProducts : Flags -> Http.Request ProductItemList
requestProducts flags = 
    Http.request 
        { method = "POST"
        , headers = [ Http.header "Authorization" flags.accessToken ]
        , url = productUrl
        , body = flags |> encodeProductsPayload |> Http.jsonBody
        , expect = Http.expectJson decodeProductItemList
        , timeout = Nothing
        , withCredentials = False
        }
