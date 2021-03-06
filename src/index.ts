import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

const client = new Sentry.BrowserClient({
  dsn: "https://d1648f12a72140d39bb0b0ebc11dbf15@o1199623.ingest.sentry.io/6323406",
  tracesSampleRate: 1.0,
  integrations: (defaultIntegrations) => [...defaultIntegrations, new BrowserTracing()],
  release: '0.0.1',
  beforeSend(event, hint) {
    console.log('hint', hint);
    return event;
  },
});
const hub = new Sentry.Hub(client);

const h1 = document.querySelector('h1');
h1.addEventListener('click', () => {
  try {
    // @ts-ignore
    abacaxi();
  } catch (err) {
    console.log("eyyyy");
    hub.captureException(err);
  }
})
