module Model exposing (..)

import Http 



-- UNION TYPES

 
type Msg 
  = Response (Result Http.Error ProductItemList)
  | ATCResponse (Result Http.Error AddToCartResponse)
  | AddToCart Flags Product




-- MODEL



type alias Model =
  { flags : Flags
  , urls : Urls
  , response : ProductItemList
  , addToCartResponse : AddToCartResponse
  -- , route : Route
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


type alias AddToCartResponse =
  { url : String
  }




-- PRODUCT ITEM LIST



type alias ProductItemList = 
  { productItemList : List Product
  -- , launchDarklyData : Maybe String
  -- , marketingText : Maybe String
  }


type alias Product =
  { assetId : String
  , pap : String
  , name : String
  -- , price : Price
  , previewImageUrl : String
  , albxLocation : String
  , templateId : String
  , sceneId : String
  , imageSource : String
  , cartChannel : String
  , templateImageCount : Int
  , usedImageIdList : List String
  -- -- , productTranslation : Translation
  , formatGroupKey : String
  , articleType : String
  -- , additionalData : Maybe
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
