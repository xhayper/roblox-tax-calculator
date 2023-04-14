// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Roblox Tax Calculator",
      meta: [
        {
          property: "description",
          content:
            "Calculate the tax that you have to pay when putting item in the market place and find the amount you need to put to get the correct amount",
        },
        {
          property: "keywords",
          content:
            "roblox, robux, marketplace, shirt, pants, decal, gamepasses, gamepass, tax, calculator",
        },
        {
          property: "og:title",
          content: "Roblox Tax Calculator",
        },
        {
          property: "og:description",
          content:
            "Calculate the tax that you have to pay when putting item in the market place and find the amount you need to put to get the correct amount",
        },
        {
          property: "og:url",
          content: "https://roblox-tax-calculator-xhayper.vercel.app/",
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
