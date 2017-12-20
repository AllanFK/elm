module Update.Buttons exposing (..)


import Model exposing (..)        





updateButtonText : Model -> String -> ProductItemList
updateButtonText model assetId =
    let
        removeText product =
            if product.assetId == assetId then
               { product | buttonText = "" }
            else
               product
    in
        ProductItemList <| List.map removeText model.productsResult.productItemList
