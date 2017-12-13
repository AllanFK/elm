module Model exposing (..)

import Http


-- MODEL


type Msg 
    = Response (Result Http.Error String)


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

