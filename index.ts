import reduceValues from "@unction/reducevalues";
import mergeLeft from "@unction/mergeleft";
import first from "@unction/first";
import fresh from "@unction/fresh";
import {EnumerableType} from "./types";

export default function mergeAllLeft<A> (enumerables: Array<EnumerableType<A>>): EnumerableType<A> {
  if (first(enumerables)) {
    return reduceValues(mergeLeft)(fresh(first(enumerables)))(enumerables);
  }

  return enumerables;
}
