module View.Templates exposing (..)

import Model exposing (..)
import Html exposing (..)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)
import Dict





-- TEMPLATES


getTemplate : Model -> Product -> Html Msg
getTemplate model = 
    case Dict.get model.flags.template (templates model) of 
        Nothing ->
            \x -> div [][]
        
        Just template -> 
            template
 




templates : Model -> Dict.Dict String (Product -> Html Msg)
templates model = Dict.fromList
    [ ("standard-portrait", standardPortrait model)
    , ("standard-landscape", standardLandscape model)
    ]





standardPortrait : Model -> Product -> Html Msg
standardPortrait model = 
    \product -> 
        div [ class "xsellfrontend-standard-portrait-wrapper" ]
            [ text "hejsa"
            , br [][]
            , button [ onClick (AddToCart model.flags product) ][ text "Add to cart"] 
            ]





standardLandscape : Model -> Product -> Html Msg
standardLandscape model = \x -> div [][ text "template 2" ]