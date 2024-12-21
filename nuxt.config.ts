import { defineNuxtConfig } from "nuxt/config"
import federation from "@originjs/vite-plugin-federation"

const MFE_HOST = process.env.MFE_APP1_HOST

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  ssr: false,
  nitro: {
    preset: "netlify-static"
  },
  vite: {
    plugins: [
      federation({
        name: "host-app",
        remotes: {
          remote: `${MFE_HOST}/_nuxt/remoteEntry.js`
        }
        // shared: ['vue']
      })
    ],
    build: {
      target: "esnext"
    }
  }
})
