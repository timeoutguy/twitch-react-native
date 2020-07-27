const ellipsize = (string, maxString) => {
  return string.length >= maxString ? (((string).substring(0, maxString - 3)) + '...') : string
}

export default ellipsize