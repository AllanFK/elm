module Model exposing (..)

import Http


-- MODEL


type Msg 
  = Response (Result Http.Error ProductItemList)


type alias ProductItemList = 
  { productItemList : Product
  , launchDarklyData : Maybe
  , marketingText : Maybe
  }

type alias Product =
  { assetId : String
  , pap : String
  , name : String
  , price : Price
  , previewImageUrl : String
  , albxLocation : String
  , templateId : String
  , sceneId : String
  , imageSource : String
  , cartChannel : String
  , templateImageCount : Int
  , usedImageIdList : List String
  , productTranslation : Translation
  , formattedGroupKey : String
  , articleType : String
  , additionalData : Maybe
}

type alias Price =
  { currencyCode : String
  , discountCode : String
  , discountPercent : Int
  , discountAutoApply : Bool
  , subTotal : Int
  , discount : Int
  , totalPrice : Int
  , formattedSubTotal : String
  , formattedDiscount : String
  , formattedTotalPrice : String
  }
  
type alias Translation =
  { name : String
  , description : String
  , ingress : String
  , bullets : String
  , lang : String
  }


type alias Model =
  { flags : Flags
  , urls : Urls
  , response : List String
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

