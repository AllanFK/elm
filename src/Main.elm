module Main exposing (..)


import Html exposing (..)
import Model exposing (..)
import Http.Products exposing (..)
import Ports exposing (..)
import View.Templates exposing (getTemplate)




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
    ( Model flags (Urls productUrl) (ProductItemList []), sendProductsRequest flags)
 




-- UPDATE



update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Response (Ok response) ->
            ({ model | response = response }, check response.productItemList)

        Response (Err _) ->
            (model, Cmd.none)





-- VIEW



view : Model -> Html Msg
view model =
    -- ul []
    --     (List.map (\l -> li [] [ text l ]) model.response.productItemList)
    div [] [ getTemplate model.flags.template
           , text (toString model.response.productItemList) 
           ]   





-- SUBSCRIPTIONS



subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none

