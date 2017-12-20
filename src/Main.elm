module Main exposing (..)


import Html exposing (..)
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
      (AddToCartResult "" False "")
    , sendProductsRequest flags)
 




-- UPDATE



update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ProductsResponse (Ok response) ->
            ( { model | productsResult = response }, check response.productItemList )

        ProductsResponse (Err _) ->
            ( model, Cmd.none )

        AddToCartResponse (Ok response) ->
            ( model, Cmd.none )

        AddToCartResponse (Err _) ->
            ( model, Cmd.none )

        AddToCart flags product ->
            ( (updateButtonText model.productsResult.productItemList product.assetId), sendAddToCartRequest flags product )

        
       


updateButtonText list assetId =
    let
        removeText product =
            if product.assetId == assetId then
               { product | buttonText = "" }
            else
               { product | buttonText = "hej" }
        
    in
        List.map removeText list


        

-- VIEW



view : Model -> Html Msg
view model =
    div [] 
        (List.map (getTemplate model) model.productsResult.productItemList)
              




-- SUBSCRIPTIONS



subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none

