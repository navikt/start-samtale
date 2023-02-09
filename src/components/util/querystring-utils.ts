import queryString from "query-string"

export function getQueryParam(
  locationSearch: string,
  key: string
): string | undefined {
  const parsed = queryString.parse(locationSearch)
  const parsedKey = parsed[key]

  if (Array.isArray(parsedKey)) {
    return (parsedKey as string[])[0]
  } else if (parsedKey === null) {
    return undefined
  } else {
    return parsedKey
  }
}
