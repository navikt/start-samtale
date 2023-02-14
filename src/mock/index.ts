// tslint:disable
import { rest, setupWorker } from 'msw'
import { opprettDialog } from './dialog'
import { oppfolging } from './oppfolging'

const handlers = [
  rest.post(
    `${import.meta.env.BASE_URL}veilarbdialog/api/dialog`,
    async (req, res, ctx) =>
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
      console.log(req)
      const excludedRoutes = [
        '/favicon.ico',
        '/manifest.json',
        '/src',
        '/client.js',
      ]

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
