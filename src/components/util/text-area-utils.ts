export function feilmelding(
  feil: boolean,
  maksLengde: number,
  value: string,
  customFeil?: string
) {
  if (!feil) {
    return
  }
  if (maksLengde < value.length) {
    return `Du må korte ned teksten til ${maksLengde} tegn`
  }
  return customFeil
}
