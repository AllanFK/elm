module Http.Products exposing (..)


import Http exposing (..)
import Json.Decode as Decode exposing (..)
import Json.Encode as Encode
import Model exposing (..)



productUrl : String
productUrl = "https://96eg5oo6fb.execute-api.eu-west-1.amazonaws.com/Prod/api/v1/GetProducts"





sendProductsRequest : Flags -> Cmd Msg
sendProductsRequest flags =
    Http.send Model.Response (requestProducts flags)
  




encodeProductsPayload : Flags -> Encode.Value
encodeProductsPayload flags = 
    Encode.object 
        [ ("vendorId", Encode.string flags.vendorId)
        , ("page", Encode.string flags.page) 
        , ("channel", Encode.string flags.channel) 
        , ("previewImageWidth", Encode.string flags.previewImageWidth) 
        , ("language", Encode.string flags.language)
        ]   



 

decodeProductItemList : Decoder ProductItemList
decodeProductItemList =
    map ProductItemList
        (field "productItemList" (Decode.list decodeProduct))
        
        -- |> required "productItemsList" (Decode.list string)
        -- |> required "marketingsTest" (Decode.maybe string)
        -- |> required "launchDarklyData" (Decode.maybe string)





decodeProduct : Decoder Product
decodeProduct =
    map3 Product
        (field "name" string)
        (field "assetId" string)
        (field "pap" string)





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
