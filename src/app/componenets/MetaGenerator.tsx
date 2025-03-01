import type { Metadata } from "next"

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
  seo: string[];
}

export function generateMetadataHelper(content: Content): Metadata {
  if (!content) return {}

  const siteName = process.env.SITE_NAME ?? "ChassisVIN"
  const defaultDescription = `Welcome to ${siteName}`
  const defaultImageUrl = "/default-og-image.png"
  const defaultAuthor = {
    name: "Ethan J. Caldwell",
    url: "/author/ethan",
  }

  const showIndex = !content.seo.some(tag => tag.toLowerCase().includes('noindex'))
  const showFollow = !content.seo.some(tag => tag.toLowerCase().includes('nofollow'))
  const showType = content.seo.some(tag => tag.toLowerCase().includes('article')) ? 'article' : 'website';


  return {
    title: content.metaTitle ?? siteName,
    description: content.metaDescription ?? defaultDescription,
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