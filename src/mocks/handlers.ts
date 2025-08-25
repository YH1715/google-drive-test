import { http, HttpResponse, passthrough } from "msw";

export const handlers = [
  http.get("https://www.googleapis.com/*", ({ request }) => {
    console.log({ googleRequest: request });

    return passthrough();
  }),
  http.post("https://www.googleapis.com/*", ({ request }) => {
    console.log({ googleRequest: request });

    return passthrough();
  }),
];
