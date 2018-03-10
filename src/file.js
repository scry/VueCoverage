export function reversal (str) {
  return this.msg
    .split('')
    .reduceRight(
      (acc, val) => acc.push(val),
      [])
}

export function splitSpaces (str) {
  return this.msg.split(' ')
}
