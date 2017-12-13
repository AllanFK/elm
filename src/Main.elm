module Main exposing (..)

import Html exposing (..)
import Html.Events exposing (..)
import Model exposing (..)
import Http exposing (..)
import Json.Decode as Decode
import Json.Encode as Encode



init : Flags -> ( Model, Cmd Msg )
init flags =
    ( Model flags (Urls xUrl) "asd",  getProducts (Model flags (Urls xUrl) "") )



userEncoder : Model -> Encode.Value
userEncoder model = 
    Encode.object 
        [ ("vendorId", Encode.string model.flags.vendorId)
        , ("page", Encode.string model.flags.page) 
        , ("channel", Encode.string model.flags.channel) 
        , ("previewImageWidth", Encode.string model.flags.previewImageWidth) 
        , ("language", Encode.string model.flags.language)
        ]   


postRequest : Model -> Http.Request String
postRequest model = 
    Http.request 
        { method = "POST"
        , headers = [ Http.header "Authorization" model.flags.accessToken ]
        , url = model.urls.product
        , body = model |> userEncoder |> Http.jsonBody
        , expect = Http.expectString
        , timeout = Nothing
        , withCredentials = False
        }



-- MESSAGES



view : Model -> Html Msg
view model =
    div []
        [ text model.response
        , button [][ text "Click" ]
        ]
        


-- UPDATE



type Msg 
    = Response (Result Http.Error String)



update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Response (Ok products) ->
            ({ model | response = products }, Cmd.none)

        Response (Err _) ->
            (model, Cmd.none)



getProducts : Model -> Cmd Msg
getProducts model =
    Http.send Response (postRequest model)
  


decodeGifUrl : Decode.Decoder String
decodeGifUrl =
  Decode.at ["data", "image_url"] Decode.string


-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none




-- MAIN


main : Program Flags Model Msg
main =
    programWithFlags
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }