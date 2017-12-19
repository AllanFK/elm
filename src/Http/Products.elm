module Http.Products exposing (..)


import Http exposing (..)
import Model exposing (..)
import Json.Encode as Encode exposing (..)
import Json.Decode as Decode exposing (..)
import Json.Decode.Pipeline exposing (..)




-- REQUESTS


productUrl : String
productUrl = "https://96eg5oo6fb.execute-api.eu-west-1.amazonaws.com/Prod/api/v1/GetProducts"





sendProductsRequest : Flags -> Cmd Msg
sendProductsRequest flags =
    Http.send ProductsResponse (requestProducts flags)
  





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





-- DECODERS 


decodeProductItemList : Decoder ProductItemList
decodeProductItemList =
    decode ProductItemList
        |> required "productItemList" (Decode.list decodeProduct)
        




decodeProduct : Decoder Product
decodeProduct =
    decode Product
        |> required "assetId" Decode.string
        |> required "pap" Decode.string
        |> required "name" Decode.string
        |> required "previewImageUrl" Decode.string
        |> required "albxLocation" Decode.string
        |> required "templateId" Decode.string
        |> required "sceneId" Decode.string
        |> required "imageSource" Decode.string
        |> required "cartChannel" Decode.string
        |> required "templateImageCount" Decode.int
        |> required "usedImageIdList" (Decode.list Decode.string)
        |> required "formatGroupKey" Decode.string
        |> required "articleType" Decode.string
        -- |> required "additionalData" (Decode.maybe string)





-- ENCODERS


encodeProductsPayload : Flags -> Encode.Value
encodeProductsPayload flags = 
    Encode.object 
        [ ("vendorId", Encode.string flags.vendorId)
        , ("page", Encode.string flags.page) 
        , ("channel", Encode.string flags.channel) 
        , ("previewImageWidth", Encode.string flags.previewImageWidth) 
        , ("language", Encode.string flags.language)
        ]   
