// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Introdução à Programação Orientada a Objetos com Java";
export const SITE_DESCRIPTION =
  "Introdução à Programação Orientada a Objetos com Java";
export const TWITTER_HANDLE = "@unifacema";
export const MY_NAME = "Ads 2023.2";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
