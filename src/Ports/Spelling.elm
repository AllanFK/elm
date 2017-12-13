port module Ports.Spelling exposing (..)


-- port for sending strings out to JavaScript
port check : String -> Cmd msg

port suggestions : (List String -> msg) -> Sub msg