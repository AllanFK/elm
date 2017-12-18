module Main exposing (..)


import Html exposing (..)
import Html.Events exposing (..)
import Model exposing (..)
import Http.Products exposing (..)
import Http.AddToCart exposing (..)
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
    ( Model flags 
      (Urls productUrl) 
      (ProductItemList []) 
      (AddToCartResponse "url")
    , sendProductsRequest flags)
 




-- UPDATE



update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Response (Ok response) ->
            ( { model | response = response }, check response.productItemList )

        Response (Err _) ->
            ( model, Cmd.none )

        ATCResponse (Ok response) ->
            ( model , Cmd.none )

        ATCResponse (Err _) ->
            ( model, Cmd.none )

        AddToCart flags product ->
            ( model, sendAddToCartRequest flags product )

        
       


-- VIEW



view : Model -> Html Msg
view model =
    div [] 
        (List.map (getTemplate model) model.response.productItemList)
              




-- SUBSCRIPTIONS



subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none

