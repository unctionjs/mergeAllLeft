/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import mergeAllLeft from "./index"

test("Array empty", ({same, end}) => {
  same(
    mergeAllLeft([]),
    []
  )

  end()
})

test("Array", ({same, end}) => {
  same(
    mergeAllLeft([["0"], ["1"], ["2"]]),
    ["2", "1", "0"]
  )

  end()
})

test("Object", ({same, end}) => {
  same(
    mergeAllLeft([{aaa: "aaa"}, {bbb: "bbb"}, {ccc: "ccc"}]),
    {
      aaa: "aaa",
      bbb: "bbb",
      ccc: "ccc",
    }
  )

  end()
})

test("Object", ({same, end}) => {
  same(
    mergeAllLeft([{aaa: "aaa"}, {aaa: "bbb"}, {ccc: "ccc"}]),
    {
      aaa: "aaa",
      ccc: "ccc",
    }
  )

  end()
})
