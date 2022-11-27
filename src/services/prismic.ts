import * as Prismic from '@prismicio/client'

export const client = Prismic.createClient('antonio-portfolio', {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
})