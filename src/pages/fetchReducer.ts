export enum FetchActionTypes {
  LOADING,
  FAILURE,
  OK,
}

interface FetchState {
  loading: boolean
  failure: boolean
}

export interface FetchAction {
  type: FetchActionTypes
  value?: string
}

export const initialFetchState = {
  loading: false,
  failure: false,
}

export const fetchReducer = (state: FetchState, action: FetchAction) => {
  switch (action.type) {
    case FetchActionTypes.LOADING:
      return { ...state, loading: true }
    case FetchActionTypes.OK:
      return { ...state, loading: false }
    case FetchActionTypes.FAILURE:
      return { ...state, loading: false, failure: true }
    default:
      throw new Error('Not supported action')
  }
}
