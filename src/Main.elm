module Main exposing (..)

import Html exposing (..)
import Model exposing (..)
import Http.Products exposing (..)



-- MAIN


main : Program Flags Model Msg
main =
    programWithFlags
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }




init : Flags -> ( Model, Cmd Msg )
init flags =
    ( Model flags (Urls productUrl) "asd",  sendProductsRequest flags)
 



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Response (Ok products) ->
            ({ model | response = products }, Cmd.none)

        Response (Err _) ->
            (model, Cmd.none)




-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ text model.response
        , button [][ text "Click" ]
        ]
       



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none

