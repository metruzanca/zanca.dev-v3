import type { Twitter, OpenGraph } from "svelte-meta-tags";

export const TITLE = "Developer Blog by Samuele Zanca";
export const URL = "Zanca.Dev";
export const BASE_URL = 'https://zanca.dev'

export const TWITTER: Twitter = {
  cardType: "summary",
  handle: "@metruzanca",
}

export const OPEN_GRAPH: OpenGraph = {
  type: "website",
}