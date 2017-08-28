import reduceValues from "@unction/reducevalues"
import mergeLeft from "@unction/mergeleft"
import key from "@unction/key"
import fresh from "@unction/fresh"

const FIRST = 0

export default function mergeAllLeft (functors: Array<FunctorType>): FunctorType {
  return reduceValues(mergeLeft)(fresh(key(FIRST)(functors)))(functors)
}
