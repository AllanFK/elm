module Http.AddToCart exposing (..)


import Http exposing (..)
import Model exposing (..)
import Json.Encode as Encode exposing (..)
import Json.Decode as Decode exposing (..)
import Json.Decode.Pipeline exposing (decode, required)




-- REQUESTS


addToCartUrl : String
addToCartUrl = "https://96eg5oo6fb.execute-api.eu-west-1.amazonaws.com/Prod/api/v1/AddToCart"





sendAddToCartRequest : Flags -> Product -> Cmd Msg
sendAddToCartRequest flags product =
    Http.send Model.ATCResponse (requestAddToCart flags product)
  





requestAddToCart : Flags -> Product -> Http.Request AddToCartResponse
requestAddToCart flags product = 
    Http.request 
        { method = "POST"
        , headers = [ Http.header "Authorization" flags.accessToken ]
        , url = addToCartUrl
        , body = encodeAddToCartPayload flags product |> Http.jsonBody
        , expect = Http.expectJson decodeAddToCart
        , timeout = Nothing
        , withCredentials = False
        }





decodeAddToCart : Decoder AddToCartResponse
decodeAddToCart =
    decode AddToCartResponse
        |> required "url" Decode.string
        




encodeAddToCartPayload : Flags -> Product -> Encode.Value
encodeAddToCartPayload flags product = 
    Encode.object 
        [ ("albxLocation", Encode.string product.albxLocation)
        , ("amount", Encode.int 1) 
        , ("channel", Encode.string flags.channel) 
        , ("previewImageUrl", Encode.string product.previewImageUrl) 
        , ("language", Encode.string flags.language)
        ]  




