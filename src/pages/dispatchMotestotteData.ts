import { FetchAction, FetchActionTypes } from "./fetchReducer"
import { postMotestotte } from "../components/api/api"

export function dispatchMotestotte(
  dispatch: (value: FetchAction) => void
): Promise<void> {
  dispatch({ type: FetchActionTypes.LOADING })
  return postMotestotte()
    .then(() => {
      dispatch({ type: FetchActionTypes.OK })
    })
    .catch((reason) => {
      dispatch({ type: FetchActionTypes.FAILURE })
      return Promise.reject(reason)
    })
}
