module Main exposing (..)


import Html exposing (..)
import Html.Events exposing (..)
import Model exposing (..)
import Http.Products exposing (..)
-- import Http.AddToCart exposing (..)
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

        AddToCart ->
            ( model, Cmd.none )

        
       


-- VIEW



view : Model -> Html Msg
view model =
    -- ul []
    --     (List.map (\l -> li [] [ text l ]) model.response.productItemList)
    div [] 
        -- (List.map (getTemplate model.flags.template) model.response.productItemList)
        (List.map (getTemplate model) model.response.productItemList)
        --    , text model.addToCartResponse.url
        --    , br [] [] 
        --    , button [ onClick AddToCart ] [ text "Add to cart" ]
              





-- SUBSCRIPTIONS



subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none

