export default function useMath() {
  const random = (minimum: number, range: number) => {
    return minimum + Math.floor(Math.random() * range)
  }

  return {
    random
  }
}