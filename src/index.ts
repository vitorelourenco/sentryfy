import { BrowserTracing } from "@sentry/tracing";
import { BrowserClient, Hub } from "@sentry/browser";

const client = new BrowserClient({
  dsn: "https://a842cbfdb2434556a09ea4efaede2b58@o1190326.ingest.sentry.io/6311376",
  tracesSampleRate: 1.0,
  integrations: [new BrowserTracing()],
  release: '0.0.1',
  beforeSend(event, hint) {
    console.log('hint', hint);
    return event;
  },
});
const hub = new Hub(client);

try {
  // @ts-ignore
  abacaxi();
} catch (err) {
  console.log("eyyyy");
  hub.captureException(err);
}
