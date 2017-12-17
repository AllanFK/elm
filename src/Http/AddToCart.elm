module Http.AddToCart exposing (..)


import Http exposing (..)
import Model exposing (..)
import Http.Decoders exposing (..)
import Http.Encoders exposing (..)





-- REQUESTS


addToCartUrl : String
addToCartUrl = "https://96eg5oo6fb.execute-api.eu-west-1.amazonaws.com/Prod/api/v1/AddToCart"





sendAddToCartRequest : Model -> Cmd Msg
sendAddToCartRequest model =
    Http.send Model.Response (requestAddToCart model)
  





requestAddToCart : Model -> Http.Request ProductItemList
requestAddToCart model = 
    Http.request 
        { method = "POST"
        , headers = [ Http.header "Authorization" model.flags.accessToken ]
        , url = addToCartUrl
        , body = model |> encodeAddToCartPayload |> Http.jsonBody
        , expect = Http.expectJson decodeProductItemList
        , timeout = Nothing
        , withCredentials = False
        }
