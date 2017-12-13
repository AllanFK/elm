module Http.Products exposing (..)

import Http exposing (..)
import Json.Decode as Decode
import Json.Encode as Encode
import Model exposing (..)



productUrl : String
productUrl = "https://96eg5oo6fb.execute-api.eu-west-1.amazonaws.com/Prod/api/v1/GetProducts"



encodeProductsPayload : Flags -> Encode.Value
encodeProductsPayload flags = 
    Encode.object 
        [ ("vendorId", Encode.string flags.vendorId)
        , ("page", Encode.string flags.page) 
        , ("channel", Encode.string flags.channel) 
        , ("previewImageWidth", Encode.string flags.previewImageWidth) 
        , ("language", Encode.string flags.language)
        ]   



requestProducts : Flags -> Http.Request String
requestProducts flags = 
    Http.request 
        { method = "POST"
        , headers = [ Http.header "Authorization" flags.accessToken ]
        , url = productUrl
        , body = flags |> encodeProductsPayload |> Http.jsonBody
        , expect = Http.expectString
        , timeout = Nothing
        , withCredentials = False
        }
