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





