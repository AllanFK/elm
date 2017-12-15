port module Ports exposing (..)

import Model exposing (..)


-- PORT COMMANDS


port check : List Product -> Cmd msg





-- PORT SUBSCRIPTIONS


port suggestions : (List String -> msg) -> Sub msg