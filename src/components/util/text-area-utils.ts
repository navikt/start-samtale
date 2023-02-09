export function tekstTeller(threshold: number) {
  return (antallSkrevet: number, max: number): string => {
    if (antallSkrevet > max) {
      return "Du har " + (antallSkrevet - max) + " tegn for mye"
    }
    if (antallSkrevet >= threshold) {
      return "Du har " + (max - antallSkrevet) + " tegn igjen"
    }
    return ""
  }
}

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
