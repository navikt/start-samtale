import { useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"

function PageChangeListener() {
  const location = useLocation()
  useLayoutEffect(() => {
    window.scroll(0, 0)
  }, [location.pathname])

  return null
}

export default PageChangeListener
