import React, { useReducer } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DinSituasjonView, { SPORSMAL_DIN_SITUASJON } from './DinSituasjonView'
import { fetchReducer, initialFetchState } from '../fetchReducer'
import { dispatchDialogData } from '../dispatchDialogData'
import { PAGE_ID as OPPSUMMERING_PAGE_ID } from '../oppsummering/Oppsummering'
import { SPORSMAL_KANAL, moteFormValue } from '../onsket-moteform/moteFormUtil'
import { lagDialogTekst } from '../../components/util/dialogTekstUtil'

export const PAGE_ID = 'din-situasjon'

function DinSituasjonSporsmal() {
  const [fetchState, fetchDispatch] = useReducer(
    fetchReducer,
    initialFetchState
  )

  const location = useLocation()
  const navigate = useNavigate()

  const onSubmit = (value: string) => {
    const dialogInputData = [
      { spm: SPORSMAL_KANAL, svar: moteFormValue(location.state.kanal) },
      { spm: SPORSMAL_DIN_SITUASJON, svar: value },
    ]
    dispatchDialogData(lagDialogTekst(dialogInputData), fetchDispatch).then(
      (res) => {
        navigate(`/${OPPSUMMERING_PAGE_ID}`, {
          state: {
            ...location.state,
            dialogId: res.id,
          },
        })
      }
    )
  }

  return <DinSituasjonView onSubmit={onSubmit} loading={fetchState.loading} />
}

export default DinSituasjonSporsmal
