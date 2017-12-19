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
                    , style [("background", "url(" ++ product.previewImageUrl ++ ") center 30% / cover no-repeat" )] ]
                []
            , div [ class "xsellfrontend-standard-portrait-text-container" ]
                [ span [ class "xsellfrontend-standard-portrait-text-container-header" ]
                    [ div [ id "xsellfrontendStandardPortraitTextContainerHeader" ]
                        [ text "Name" ]
                    , div [ class "xsellfrontend-standard-portrait-text-container-header-description" ]
                        [ text "Description" ]
                    ]
                , div [ class "xsellfrontend-standard-portrait-subheader" ]
                    [ span []
                        [ text "Small price" ]
                    , span [ class "xsellfrontend-standard-portrait-price xsellfrontend-primary-color" ]
                        [ span [ id "xsellfrontendStandardPortraitPrice" ]
                            [ text "Price" ]
                        ]
                    ]
                , text "Discount box"
                , button [ class "xsellfrontend-standard-portrait-add-to-basket-button button tertiary", attribute "data-tam" "add_to_cart_button", onClick (AddToCart model.flags product) ]
                    [ span []
                        [ text "Add to cart" ]
                    ]
                , div [ class "xsellfrontend-standard-portrait-bottom-text" ]
                    [ text "View more" ]
                ]
            ]

