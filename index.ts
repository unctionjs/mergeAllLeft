import reduceValues from "@unction/reducevalues";
import mergeLeft from "@unction/mergeleft";
import first from "@unction/first";
import fresh from "@unction/fresh";

export default function mergeAllLeft<A> (enumerables: Array<Array<A> | Set<A> | RecordType<unknown, A> | string>): Array<A> | Set<A> | RecordType<unknown, A> | string {
  if (first(enumerables)) {
    return reduceValues(mergeLeft)(fresh(first(enumerables)))(enumerables);
  }

  return enumerables;
}
