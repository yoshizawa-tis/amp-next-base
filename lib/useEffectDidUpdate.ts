import { useEffect, useRef } from "react"

// 参考：https://qiita.com/irico/items/4b2ff1c25b49ea6a4abf
const useEffectDidUpdate = (func, dependencyList) => {
  const fisrtFlgRef = useRef(true)

  useEffect(() => {
    if (!fisrtFlgRef.current) {
      func()
    } else {
      fisrtFlgRef.current = false
    }
  }, dependencyList)
}

export default useEffectDidUpdate