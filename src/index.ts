import { BrowserTracing } from "@sentry/tracing";
import { BrowserClient, Hub } from "@sentry/browser";

const client = new BrowserClient({
  dsn: "https://d1648f12a72140d39bb0b0ebc11dbf15@o1199623.ingest.sentry.io/6323406",
  tracesSampleRate: 1.0,
  integrations: (defaultIntegrations) => [...defaultIntegrations, new BrowserTracing()],
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
