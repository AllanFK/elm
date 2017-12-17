module Http.Encoders exposing (..)

import Json.Encode as Encode
import Model exposing (..)





-- ENCODERS


encodeProductsPayload : Flags -> Encode.Value
encodeProductsPayload flags = 
    Encode.object 
        [ ("vendorId", Encode.string flags.vendorId)
        , ("page", Encode.string flags.page) 
        , ("channel", Encode.string flags.channel) 
        , ("previewImageWidth", Encode.string flags.previewImageWidth) 
        , ("language", Encode.string flags.language)
        ]   





-- encodeAddToCartPayload : Model -> Encode.Value
-- encodeAddToCartPayload model = 
--     Encode.object 
--         [ ("albxLocation", Encode.string model.response.)
--         , ("amount", Encode.int 1) 
--         , ("channel", Encode.string model.flags.channel) 
--         , ("previewImageUrl", Encode.string model.response.previewImageUrl) 
--         , ("language", Encode.string model.flags.language)
--         ]   