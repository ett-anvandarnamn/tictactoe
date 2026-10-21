export function isArrayEqual(array1, array2) {
    const isEqual = array1.length === array2.length &&
        array1.every((value, index) => value === array2[index]);
    return isEqual;
}
