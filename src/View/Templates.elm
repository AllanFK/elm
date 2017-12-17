module View.Templates exposing (..)

import Model exposing (..)
import Html exposing (..)
import Html.Attributes exposing (..)
import Dict





-- TEMPLATES


getTemplate : Model -> a -> Html Msg
getTemplate model = 
    case Dict.get model.flags.template (templates model) of 
        Nothing ->
            \x -> div [][]
        
        Just template -> 
            template
 




templates : Model -> Dict.Dict String (a -> Html Msg)
templates model = Dict.fromList
    [ ("standard-portrait", template1 model)
    , ("standard-landscape", template2 model)
    ]





template1 : Model -> a -> Html Msg
template1 model = \x -> div [ class "xsellfrontend-standard-portrait-wrapper" ][ text "template 1" ]





template2 : Model -> a -> Html Msg
template2 model = \x -> div [][ text "template 2" ]