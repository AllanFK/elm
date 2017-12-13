module Test exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import TestView exposing (..)


main : Program Never Model Msg
main =
    program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }




type alias Model = 
    { greeting : String
    , greeting2 : String
}




init : ( Model, Cmd Msg )
init =
    ( Model "hello" "hejsa" , Cmd.none )




type Msg = Test




update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Test ->
            ( model, Cmd.none )
            



subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



view : Model -> Html Msg
view model = 
    div [ style [("border", "1px solid black"), ("width", "800px"), ("height", "600px")] ] [
        yaaDiv
        , div[][ text model.greeting ]    
        , div[][ text model.greeting2 ]
        , div[][ text "3" ]
        
    ]
    

