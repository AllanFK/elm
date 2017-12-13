module Main exposing (..)

import Html exposing (..)
import Html.Events exposing (..)
import Model exposing (..)
import Http.Products exposing (..)
import Http exposing (..)


init : Flags -> ( Model, Cmd Msg )
init flags =
    ( Model flags (Urls productUrl) "asd",  sendProductsRequest flags)



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


sendProductsRequest : Flags -> Cmd Msg
sendProductsRequest flags =
    Http.send Response (requestProducts flags)
  




-- decodeGifUrl : Decode.Decoder String
-- decodeGifUrl =
--   Decode.at ["data", "image_url"] Decode.string


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