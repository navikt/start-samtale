// tslint:disable
import { rest, setupWorker } from "msw"
import { opprettDialog } from "./dialog"
import { oppfolging } from "./oppfolging"
;(window as any).frontendlogger = {
  info: function () {
    /* ingenting */
  },
  warn: function () {
    /* ingenting */
  },
  error: function () {
    /* ingenting */
  },
  event: function () {
    console.log("event-triggered", arguments)
  },
}

const handlers = [
  rest.post(`/veilarbdialog/api/dialog`, async (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json(opprettDialog(await req.json())),
      ctx.delay(1000)
    )
  ),
  rest.post(
    `${import.meta.env.BASE_URL}veilarbvedtakinfo/api/motestotte`,
    (req, res, ctx) => res(ctx.status(204), ctx.delay(1000))
  ),
  rest.get(
    `${import.meta.env.BASE_URL}veilarboppfolging/api/oppfolging`,
    (req, res, ctx) =>
      res(ctx.status(200), ctx.json(oppfolging), ctx.delay(1000))
  ),
]

const worker = setupWorker(...handlers)
export default () =>
  worker.start({
    // turn off MSW warnings for specific routes
    onUnhandledRequest(req, print) {
      // specify routes to exclude
      const excludedRoutes = ["/favicon.ico", "/manifest.json", "/src"]

      // check if the req.url.pathname contains excludedRoutes
      const isExcluded = excludedRoutes.some((route) =>
        req.url.pathname.includes(route)
      )

      if (isExcluded) {
        return
      }

      print.warning()
    },
  })
