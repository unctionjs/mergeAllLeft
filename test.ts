
import mergeAllLeft from "./index.ts";

test("Array empty", () => {
  expect(mergeAllLeft([])).toEqual([]);
});

test("Array", () => {
  expect(mergeAllLeft([["0"], ["1"], ["2"]])).toEqual(["2", "1", "0"]);
});

test("Object", () => {
  expect(mergeAllLeft([{aaa: "aaa"}, {bbb: "bbb"}, {ccc: "ccc"}])).toEqual({
    aaa: "aaa",
    bbb: "bbb",
    ccc: "ccc",
  });
});

test("Object", () => {
  expect(mergeAllLeft([{aaa: "aaa"}, {aaa: "bbb"}, {ccc: "ccc"}])).toEqual({
    aaa: "aaa",
    ccc: "ccc",
  });
});
