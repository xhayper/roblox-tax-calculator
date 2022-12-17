// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "ROBLOX MarketPlace Tax Calculator",
      meta: [
        {
          property: "og:title",
          content: "ROBLOX MarketPlace Tax Calculator",
        },
        {
          property: "og:description",
          content:
            "Calculate the tax you will pay on your ROBLOX Marketplace sales.",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: "@hayper1919",
        },
      ],
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
});
