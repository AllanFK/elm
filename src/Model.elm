module Model exposing (..)


-- MODEL


type alias Model =
  { flags : Flags
  , urls : Urls
  , response : String
  }
    

type alias Flags =
  { vendorId : String
  , channel : String
  , page : String
  , template : String
  , accessToken : String
  , previewImageWidth : String
  , language : String
  }


type alias Urls =
  { product : String

  }

xUrl : String
xUrl = "https://96eg5oo6fb.execute-api.eu-west-1.amazonaws.com/Prod/api/v1/GetProducts"

