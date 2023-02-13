import { NyDialogMeldingData } from '../api/dataTypes'

interface InputData {
  spm: string
  svar?: string
}

export const lagDialogTekst = (
  inputData: InputData[]
): NyDialogMeldingData | undefined => {
  if (inputData.length === 0) return undefined
  const tekst = inputData
    .filter(({ svar }) => svar && svar.length !== 0)
    .reduce((heleTeksten, { svar, spm }) => {
      const tekst = `Spørsmål fra NAV: ${spm}\n Svaret mitt: ${svar} \n\n`
      return heleTeksten + tekst
    }, '')
    .trim()
  return {
    tekst,
    overskrift: 'Veiledning',
  }
}
