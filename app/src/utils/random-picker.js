function intRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function createRandom(max) {
  let randoms = [],
    i
  const min = 0

  for (i = min; i <= max; i++) {
    while (randoms.length <= max) {
      let tmp = intRandom(min, max)
      if (!randoms.includes(tmp)) {
        randoms.push(tmp)
        break
      }
    }
  }
  return randoms
}

export function createRandomArray(initArray, names) {
  const max = 15
  let randoms = createRandom(max)
  let i
  for (i = 0; i <= max; i++) {
    initArray[randoms[i]] = names[i]
  }
  return initArray
}
