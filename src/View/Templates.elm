module View.Templates exposing (..)

import Model exposing (..)
import Html exposing (..)
import Dict





-- TEMPLATES


getTemplate : String -> Html Msg
getTemplate template = 
    case Dict.get template templates of 
        Nothing ->
            div [][]
        
        Just template -> 
            template
 




templates : Dict.Dict String (Html Msg)
templates = Dict.fromList
    [ ("standard-portrait", template1)
    , ("standard-landscape", template2)
    ]





template1 : Html Msg
template1 = div [][ text "template 1" ]





template2 : Html Msg
template2 = div [][ text "template 2" ]