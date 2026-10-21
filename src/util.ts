export function isArrayEqual(
  array1: Array<number>,
  array2: Array<number>,
): boolean {
  const isEqual =
    array1.length === array2.length &&
    array1.every((value, index) => value === array2[index]);

  return isEqual;
}
