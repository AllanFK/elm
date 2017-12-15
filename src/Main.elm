module Main exposing (..)

import Html exposing (..)
import Model exposing (..)
import Http.Products exposing (..)
import Ports.Spelling exposing (..)



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
    ( Model flags (Urls productUrl) ["123"],  sendProductsRequest flags)
 



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Response (Ok products) ->
            ({ model | response = ["123", "123123"] }, Cmd.none)

        Response (Err _) ->
            ({ model | response = ["error"] }, Cmd.none)




-- VIEW


view : Model -> Html Msg
view model =
    ul []
        (List.map (\l -> li [] [ text l ]) model.response)
       



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none

