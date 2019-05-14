// tslint:disable
import FetchMock, { Middleware, MiddlewareUtils } from 'yet-another-fetch-mock';
import {opprettDialog} from "./dialog";

(window as any).frontendlogger = { info: function(){}, warn: function(){}, error: function(){}, event: function(){
        console.log("event-triggered", arguments)
    }};

const loggingMiddleware: Middleware = (request, response) => {
    console.groupCollapsed(request.url);
    console.groupCollapsed('config');
    console.log('url', request.url);
    console.log('queryParams', request.queryParams);
    console.log('pathParams', request.pathParams);
    console.log('body', request.body);
    console.groupEnd();

    try {
        console.log('response', JSON.parse(response.body));
    } catch (e) {
        console.log('response', response);
    }

    console.groupEnd();
    return response;
};

const mock = FetchMock.configure({
    enableFallback: false,
    middleware: MiddlewareUtils.combine(
        MiddlewareUtils.delayMiddleware(0),
        loggingMiddleware
    )
});


mock.post('/veilarbdialog/api/dialog', ({ body }): any => opprettDialog(body));

export default mock;