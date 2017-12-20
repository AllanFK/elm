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
                    , style [("background", "url(" ++ product.previewImageUrl ++ ") center center / cover no-repeat" )] ]
                []
            , div [ class "xsellfrontend-standard-portrait-text-container" ]
                [ span [ class "xsellfrontend-standard-portrait-text-container-header" ]
                    [ div [ id "xsellfrontendStandardPortraitTextContainerHeader" ]
                        [ text product.productTranslation.name ]
                    , div [ class "xsellfrontend-standard-portrait-text-container-header-description" ]
                        [ text product.productTranslation.description ]
                    ]
                , div [ class "xsellfrontend-standard-portrait-subheader" ]
                    [ span []
                        [ text (toString product.price.subTotal) ]
                    , span [ class "xsellfrontend-standard-portrait-price xsellfrontend-primary-color" ]
                        [ span [ id "xsellfrontendStandardPortraitPrice" ]
                            [ text product.price.formattedTotalPrice ]
                        ]
                    ]
                , text "Discount box"
                , button [ class "xsellfrontend-standard-portrait-add-to-basket-button button tertiary", onClick (AddToCart model.flags product) ]
                    [ span []
                        [ text product.buttonText ]
                    ]
                , div [ class "xsellfrontend-standard-portrait-bottom-text" ]
                    [ text "View more" ]
                ]
            ]
