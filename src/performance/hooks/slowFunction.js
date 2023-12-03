const slowFunction = () => {
  let value = 0
  for (let i = 0; i < 1000; i++) {
    value++
  }
  return value
}

export default slowFunction