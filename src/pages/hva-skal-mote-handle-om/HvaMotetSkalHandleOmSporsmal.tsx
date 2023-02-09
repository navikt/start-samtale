import React, { useReducer } from "react"
import HvaMotetSkalHandleOmView, { SPORSMAL } from "./HvaMotetSkalHandleOmView"
import { fetchReducer, initialFetchState } from "../fetchReducer"
import { dispatchDialogData } from "../dispatchDialogData"
import { useLocation, useNavigate } from "react-router-dom"
import { PAGE_ID as OPPSUMMERING_PAGE_ID } from "../oppsummering/Oppsummering"
import { getQueryParam } from "../../components/util/querystring-utils"

export const PAGE_ID = "hva-motet-skal-handle-om"

function HvaMotetSkalHandleOmSporsmal() {
  const [fetchState, fetchDispatch] = useReducer(
    fetchReducer,
    initialFetchState
  )
  const location = useLocation()
  const dialogId = getQueryParam(location.search, "dialogId")
  const answered = getQueryParam(location.search, "answered") === "true"
  const navigate = useNavigate()

  const onSubmit = (value: string) => {
    if (value.length !== 0) {
      const dialogInputData = {
        svar: value,
        spm: SPORSMAL,
        dialogId: dialogId,
      }

      dispatchDialogData(dialogInputData, fetchDispatch).then((res) => {
        navigate(location.pathname + `?dialogId=${res.id}&answered=true`, {
          replace: true,
        })
        navigate(`/${OPPSUMMERING_PAGE_ID}?dialogId=${res.id}`)
      })
    } else {
      const queryParam = dialogId ? `?dialogId=${dialogId}` : ""
      navigate(`/${OPPSUMMERING_PAGE_ID}${queryParam}`)
    }
  }

  return (
    <HvaMotetSkalHandleOmView
      onSubmit={onSubmit}
      loading={fetchState.loading}
      answered={answered}
    />
  )
}

export default HvaMotetSkalHandleOmSporsmal
