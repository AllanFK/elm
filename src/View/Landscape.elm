module View.Landscape exposing (..)


import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Model exposing (..)





standardLandscape : Model -> Product -> Html Msg
standardLandscape model = \x -> div [][ text "template 2" ]