module View.Portrait exposing (..)


import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Model exposing (..)





standardPortrait : Model -> Product -> Html Msg
standardPortrait model = 
    \product -> 
        div [ class "xsellfrontend-standard-portrait-wrapper" ]
            [ div [ class "xsellfrontend-standard-portrait-image-container"
                    , style [("background", "url(" ++ product.previewImageUrl ++ ") center 30% / cover no-repeat" )] 
                  ] [] 
            , div [ class "xsellfrontend-standard-portrait-text-container" ] []
            , button [ onClick (AddToCart model.flags product) ][ text "Add to cart"] 
            
            
            ]