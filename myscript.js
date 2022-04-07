import { BrowserTracing } from "@sentry/tracing";
import { BrowserClient, Hub } from "@sentry/browser";

// These variables are replaced by webpack at build time

console.log('1',window.__SENTRY__);
const client = new BrowserClient({
  dsn: "https://a842cbfdb2434556a09ea4efaede2b58@o1190326.ingest.sentry.io/6311376",
  tracesSampleRate: 1.0,
  integrations: [new BrowserTracing()],
  beforeSend(event, hint) {
    console.log(event);
    console.log(hint);
  },
});
console.log('2',window.__SENTRY__);
const hub = new Hub(client);
console.log('3',window.__SENTRY__);

//tsconfig// sourceMap: true,
//plugins:[new webpack.SourceMapDevToolPlugin()],
//have this working in sentry?
//ver se eu n estou fudendo com o sentry do client
//ver hubs
//no do thiago o sentry quebrou antes de renderizar o sentry no client
//sentry self._handler is not a function


try {
  abacaxi();
} catch (err) {
  console.log("eyyyy");
  hub.captureException(err);
}

try {
  feijao();
} catch (err) {
  console.log("uuuuuuuuuhh");
  hub.captureException(err);
}
