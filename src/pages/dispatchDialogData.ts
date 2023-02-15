import { FetchAction, FetchActionTypes } from './fetchReducer'
import { DialogData, NyDialogMeldingData } from '../components/api/dataTypes'
import { postDialog } from '../components/api/api'

export const dispatchDialogData = (
  inputData: NyDialogMeldingData | undefined,
  dispatch: (value: FetchAction) => void
): Promise<DialogData> => {
  if (!inputData)
    return Promise.reject('Kan ikke lage en dialog uten innhold (svar)')
  dispatch({ type: FetchActionTypes.LOADING })
  return postDialog(inputData)
    .then((res) => {
      dispatch({ type: FetchActionTypes.OK, value: res.id })
      return res
    })
    .catch((reason) => {
      dispatch({ type: FetchActionTypes.FAILURE })
      return Promise.reject(reason)
    })
}
