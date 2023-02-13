import React, { useReducer } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DinSituasjonView, { SPORSMAL } from './DinSituasjonView'
import { fetchReducer, initialFetchState } from '../fetchReducer'
import { dispatchDialogData } from '../dispatchDialogData'
import { PAGE_ID as OPPSUMMERING_PAGE_ID } from '../oppsummering/Oppsummering'
import { getQueryParam } from '../../components/util/querystring-utils'
import { KANAL_SPORSMAL, moteFormValue } from '../onsket-moteform/moteFormUtil'
import { lagDialogTekst } from '../../components/util/dialogTekstUtil'

export const PAGE_ID = 'din-situasjon'

function DinSituasjonSporsmal() {
  const location = useLocation()
  const navigate = useNavigate()
  const [fetchState, fetchDispatch] = useReducer(
    fetchReducer,
    initialFetchState
  )
  const dialogId = getQueryParam(location.search, 'dialogId')
  const answered = getQueryParam(location.search, 'answered') === 'true'

  const onSubmit = (value: string) => {
    if (value.length !== 0) {
      const dialogInputData = [
        { svar: moteFormValue(location.state.kanal), spm: KANAL_SPORSMAL },
        { svar: value, spm: SPORSMAL },
      ]
      dispatchDialogData(lagDialogTekst(dialogInputData), fetchDispatch).then(
        (res) => {
          navigate(location.pathname + `?dialogId=${res.id}&answered=true`, {
            replace: true,
          })
          navigate(`/${OPPSUMMERING_PAGE_ID}`)
        }
      )
    } else {
      const queryParam = dialogId ? `?dialogId=${dialogId}` : ''
      navigate(`/${OPPSUMMERING_PAGE_ID}${queryParam}`)
    }
  }

  return (
    <DinSituasjonView
      onSubmit={onSubmit}
      loading={fetchState.loading}
      answered={answered}
    />
  )
}

export default DinSituasjonSporsmal
