// v 1.0.2
import type { Metadata } from "next"
import { getDefaultAuthorName, getDefaultAuthorUrl, getDefaultImageUrl, getSiteName, getDefaultIndexability} from '@/app/componenets-global/defaults';

interface Content {
  metaTitle?: string
  metaDescription?: string
  canonical: string
  title?: string
  description?: string
  imageUrl?: string
  author?: {
    name: string
    url: string
  }
  seo?: string[];
}

export function generateMetadataHelper(content: Content): Metadata {
  if (!content) return {}

  const siteName = getSiteName()
  const defaultDescription = `Welcome to ${siteName}`
  const defaultImageUrl = getDefaultImageUrl()
  const defaultAuthor = {
    name: getDefaultAuthorName(),
    url: getDefaultAuthorUrl(),
  }


  const defaultIndexability = getDefaultIndexability()

  let defaultSeoTags
  if (defaultIndexability === "noindex") {
    defaultSeoTags = ["noindex", "nofollow", "website"]
  } else {
    defaultSeoTags = ["index", "follow", "website"]
  }
  const seoTags = content.seo || defaultSeoTags

  const showIndex = !seoTags.some(tag => tag.toLowerCase().includes('noindex'))
  const showFollow = !seoTags.some(tag => tag.toLowerCase().includes('nofollow'))
  const showType = seoTags.some(tag => tag.toLowerCase().includes('article')) ? 'article' : 'website';


  return {
    title: content.metaTitle ?? siteName,
    description: content.metaDescription ?? defaultDescription,
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
    },
    manifest: '/site.webmanifest',
    alternates: {
      canonical: content.canonical,
    },
    openGraph: {
      title: content.title ?? siteName,
      description: content.description ?? defaultDescription,
      images: [
        {
          url: content.imageUrl ?? defaultImageUrl,
          width: 1200,
          height: 630,
          alt: content.title ?? siteName,
        },
      ],
      type: showType,
      siteName: siteName,
      locale: "en_US",
      url: content.canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: content.title ?? siteName,
      description: content.description ?? defaultDescription,
      images: [content.imageUrl ?? defaultImageUrl],
    },
    authors: content.author ? [content.author] : [defaultAuthor],
    robots: {
      index: showIndex,
      follow: showFollow,
      googleBot: {
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}