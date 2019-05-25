/**
 * Sort the specified array by getting the value to compare with a getter.
 * @param {*} array The array to sort
 * @param {*} value The function that retrieves the value to compare
 */
export function sort (array, value) {
  const compare = (a, b) => {
    // Get the value of a
    const firstValue = value(a)

    // Get the value of b
    const secondValue = value(b)

    // If it's not equal return -1 or 1
    if (firstValue < secondValue) {
      return -1
    } else if (firstValue > secondValue) {
      return 1
    }

    // It's equal
    return 0
  }
  return array.sort(compare)
}
