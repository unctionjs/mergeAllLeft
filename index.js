import reduceValues from "@unction/reducevalues"
import mergeLeft from "@unction/mergeleft"
import first from "@unction/first"
import fresh from "@unction/fresh"

export default function mergeAllLeft (functors: Array<FunctorType>): FunctorType {
  if (first(functors)) {
    return reduceValues(mergeLeft)(fresh(first(functors)))(functors)
  }

  return functors
}
