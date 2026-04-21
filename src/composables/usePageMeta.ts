import { useHead } from '@unhead/vue'

const SITE_URL = 'https://loicbarthoulot.ch'
const SITE_NAME = 'Loïc Barthoulot'
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`

export interface PageMetaOptions {
  path?: string
  image?: string
  type?: 'website' | 'article' | 'profile'
}

export function usePageMeta(
  title: string,
  description: string,
  options: PageMetaOptions = {}
) {
  const path = options.path ?? (typeof window !== 'undefined' ? window.location.pathname : '/')
  const url = `${SITE_URL}${path}`
  const image = options.image ?? DEFAULT_IMAGE
  const type = options.type ?? 'website'

  useHead({
    htmlAttrs: { lang: 'fr' },
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:locale', content: 'fr_CH' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ],
    link: [
      { rel: 'canonical', href: url }
    ]
  })
}
