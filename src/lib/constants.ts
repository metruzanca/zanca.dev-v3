import type { Twitter, OpenGraph } from "svelte-meta-tags";

export const TITLE = "Developer Blog by Samuele Zanca";
export const URL = "Zanca.Dev";
export const SITE_NAME = URL;
export const BASE_URL = 'https://zanca.dev';

export const TWITTER: Twitter = {
  cardType: "summary",
  handle: "@metruzanca",
};

export const OPEN_GRAPH: OpenGraph = {
  type: "website",
};

export const menu = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog/"
  },
  {
    name: "Tags",
    href: '/blog/tags/'
  },
  {
    name: "Resume",
    // TODO this page
    href: "https://gist.githubusercontent.com/metruzanca/751361e5ba58ad06f361ebd430ae6e10/raw/resume.pdf",
    // Link using special ghost button styles
    cta: true,
  },
]