module View.Templates exposing (..)

import Model exposing (..)
import Html exposing (..)
import Html.Attributes exposing (class, style)
import Html.Events exposing (onClick)
import Dict
import View.Portrait exposing (standardPortrait)
import View.Landscape exposing (standardLandscape)





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
