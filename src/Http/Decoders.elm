module Http.Decoders exposing (..)

import Json.Decode as Decode exposing (..)
import Model exposing (..)
import Json.Decode.Pipeline exposing (..)


 

-- DECODERS 


decodeProductItemList : Decoder ProductItemList
decodeProductItemList =
    decode ProductItemList
        |> required "productItemList" (Decode.list decodeProduct)
        





decodeProduct : Decoder Product
decodeProduct =
    decode Product
        |> required "assetId" string
        |> required "pap" string
        |> required "name" string
        |> required "previewImageUrl" string
        |> required "albxLocation" string
        |> required "templateId" string
        |> required "sceneId" string
        |> required "imageSource" string
        |> required "cartChannel" string
        |> required "templateImageCount" int
        |> required "usedImageIdList" (Decode.list string)
        |> required "formatGroupKey" string
        |> required "articleType" string
        -- |> required "additionalData" (Decode.maybe string)
 

