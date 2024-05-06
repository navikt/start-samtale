// tslint:disable
import { http, HttpResponse } from 'msw'
import { opprettDialog } from './dialog'
import { oppfolging } from './oppfolging'
import { setupWorker } from 'msw/browser'
import { NyDialogMeldingData } from '../components/api/dataTypes'

const handlers = [
  http.post(
    `${import.meta.env.BASE_URL}veilarbdialog/api/dialog`,
    async ({ request: req }) =>
      HttpResponse.json(
        opprettDialog((await req.json()) as NyDialogMeldingData),
      ),
  ),
  http.post(
    `${import.meta.env.BASE_URL}veilarbvedtakinfo/api/motestotte`,
    async () => new Response(null, {status: 204})
  ),
  http.get(
    `${import.meta.env.BASE_URL}veilarboppfolging/api/oppfolging`,
    async () => HttpResponse.json(oppfolging)
  ),
]

const worker = setupWorker(...handlers)
export default () =>
  worker.start({
    serviceWorker: {
      url: `${import.meta.env.BASE_URL}mockServiceWorker.js`,
    },
    // turn off MSW warnings for specific routes
    onUnhandledRequest(req, print) {
      // specify routes to exclude
      const excludedRoutes = [
        '/favicon.ico',
        '/manifest.json',
        '/src',
        '/client.js',
      ]

      // check if the req.url.pathname contains excludedRoutes
      const isExcluded = excludedRoutes.some((route) => req.url.includes(route))

      if (isExcluded) {
        return
      }

      print.warning()
    },
  })
