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
    res(ctx.status(200), ctx.json(opprettDialog(await req.json())))
  ),
  rest.post(
    `${import.meta.env.BASE_URL}veilarbvedtakinfo/api/motestotte`,
    (req, res, ctx) => res(ctx.status(204))
  ),
  rest.get(
    `${import.meta.env.BASE_URL}veilarboppfolging/api/oppfolging`,
    (req, res, ctx) => res(ctx.status(200), ctx.json(oppfolging))
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
